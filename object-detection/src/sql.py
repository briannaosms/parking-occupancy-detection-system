from dotenv import load_dotenv
import os
import mysql.connector

# only works on same wifi network
# docker exec -it mysql /bin/sh -c "mysql -u root -ppassword"
# grab credentials
env_dir = "../../"
env_filename = "pods.env"
env_path = os.path.join(env_dir, env_filename)
try:
    os.path.exists(env_path)
    load_dotenv(env_path)
    username = os.getenv("SQL_USERNAME")
    password = os.getenv("SQL_ROOT_PASSWORD")
    database = os.getenv("SQL_DATABASE")
    host = os.getenv("HOST")
except Exception as e:
    print("ERROR: Failed to retrieve credentials\n" + e)
    exit()

# establishing the connection
print("starting conn...")
conn = mysql.connector.connect(
   user=username, 
   password=password, 
   host=host, 
   database=database)
print("conn succesful")

# Creating a cursor object using the cursor() method
cursor = conn.cursor()
print("cursor")

sql = """
    INSERT INTO ParkingLot(
        LotName, ID, MaxSpacesFaculty, MaxSpacesStudent, MaxSpacesHandicapped, MaxSpacesVisitor, CurrentSpacesFaculty, CurrentSpacesStudent, CurrentSpacesHandicapped, CurrentSpacesVisitor, Datetime)
    VALUES("Nethken", "0", "20", "30", "2", "0"
                         , "5", "15", "2", "0"
                         , "2023-03-29 18:45:00")
"""

try:
    cursor.execute(sql)
    conn.commit()
except:
    conn.rollback()

print("data inserted")

conn.close()