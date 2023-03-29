import mysql.connector

# establishing the connection
conn = mysql.connector.connect(
   user='root', password='password', host='138.47.149.20', database='ParkingLot')

# Creating a cursor object using the cursor() method
cursor = conn.cursor()

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