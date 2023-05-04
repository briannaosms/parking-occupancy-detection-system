import mysql.connector
import os
import datetime as dt
from dotenv import load_dotenv
from statistics import mean

def main():
    # Import crendentials for SQL constants
    env_dir = "./"
    env_filename = ".env"
    env_path = os.path.join(env_dir, env_filename)
    try:
        os.path.exists(env_path)
        load_dotenv(env_path)
        username = os.getenv("SQL_USERNAME")
        password = os.getenv("SQL_ROOT_PASSWORD")
        database = os.getenv("SQL_DATABASE")
        host = os.getenv("SQL_HOST")
        port = os.getenv("SQL_PORT")
        live_table = os.getenv("SQL_LIVE_TABLE")
        stats_table = os.getenv("SQL_STATS_TABLE")
    except Exception as e:
        print("ERROR: Failed to retrieve credentials\n" + e)
        exit()

    # Create the connection to the database.
    conn = mysql.connector.connect(
        user=username,
        password=password,
        host=host,
        port=port,
        database=database
    )
    # Create a cursor object.
    cursor = conn.cursor()

    # Get all rows from the live statistics table.
    sql = f"SELECT * FROM {live_table}"
    cursor.execute(sql)
    rows = cursor.fetchall()
    
    # Get only the datetime and parking values for each category from the DB rows.
    filtered_rows = filter_rows(rows)

    # Get the indicies of the list with 15 min intervals 
    quarter_hour_intervals = get_quarter_intervals(filtered_rows)

    # Get the average value of each category
    averages = []
    for row in quarter_hour_intervals:
        mean_faculty = round(mean([i[1] for i in row]))
        mean_students = round(mean([i[2] for i in row]))
        mean_handicapped = round(mean([i[3] for i in row]))
        mean_visitor = round(mean([i[4] for i in row]))
        averages.append([
            row[7][0], 
            mean_faculty, 
            mean_students, 
            mean_handicapped, 
            mean_visitor
        ])

    row_queries = []
    for i in range(len(averages)):
        row_queries.append([
            rows[0][0],                    # nethken name
            rows[0][1],                    # nethken id
            averages[i][0].strftime('%A'), # day of the week
            averages[i][0].date(),         # date
            averages[i][0].time(),         # time
            averages[i][1],                # faculty mean
            averages[i][2],                # student mean
            averages[i][3],                # handicapped mean
            averages[i][4]]                # visitor mean
        )

    for row in row_queries:
        if(row[2] == "Tuesday"):
            # Insert new queries to the DB.
            sql = """
                INSERT INTO ParkingStatistics(
                    LotName, 
                    ID, 
                    Day,
                    Date,
                    Time,
                    MeanFaculty, 
                    MeanStudent, 
                    MeanHandicapped, 
                    MeanVisitorv
                )
                VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
            data = (row_queries[0],
                    row_queries[1],
                    row_queries[2],
                    row_queries[3],
                    row_queries[4],
                    row_queries[5],
                    row_queries[6],
                    row_queries[7],
                    row_queries[8]
            )

            # Insert results into the database.
            try:
                cursor.execute(sql, data)
                conn.commit()
                print("Successfully inserted data.")
            except Exception as e:
                print(str(e))
                conn.rollback()
                exit()

    # Close the connection to the database.
    conn.close()


# get the average number of spaces available per the hour
    # 60 values per hour

# iteratively fetch the values per nearest hour
    # calculate average and push average to database

def filter_rows(rows):
    # Create a list of datetime and values for each of the parking categories.
    li = []
    for row in rows:
        faculty = row[6]
        student = row[7]
        handicapped = row[8]
        vistor = row[9]
        
        # Round the date time to the nearest minute
        delta = dt.timedelta(minutes=1)
        datetime = round_dt(row[10], delta)

        # Append the datetime and open values for each category.
        li.append([datetime, faculty, student, handicapped, vistor])

    return li

def get_quarter_intervals(filtered_rows):
    # Get the indicies of the list with 15 min intervals
    quarter_hour_intervals = []
    for i in range(len(filtered_rows)):
        # If the datetime minute is a multiple of 15, then add the average 
        # times to the list.
        if(filtered_rows[i][0].minute % 15 == 0):
            quarter_hour_intervals.append(filtered_rows[i - 7:i + 8])
    
    return quarter_hour_intervals

def round_dt(td, delta):
    return dt.datetime.min + round((td-dt.datetime.min) / delta) * delta


if(__name__ == "__main__"):
    main()