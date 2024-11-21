-- Наповнення таблиці Vet
INSERT INTO Vet (ID, University, Specialty, Number, Series)
VALUES (1, 'Harvard University', 'Veterinary Medicine', '12345', 'A123'),
       (2, 'Oxford University', 'Animal Surgery', '67890', 'B456'),
       (3, 'University of Kyiv', 'Exotic Animal Care', '54321', 'C789');

-- Наповнення таблиці Animal
INSERT INTO Animal (ID, Kind, Breed, Sex, Nickname, ExtraInformation)
VALUES (1, 'Dog', 'Golden Retriever', 'Male', 'Buddy', 'Friendly and energetic'),
       (2, 'Cat', 'Siamese', 'Female', 'Luna', 'Prefers quiet environments'),
       (3, 'Parrot', 'Macaw', 'Male', 'Rio', 'Enjoys singing and mimicking words');

-- Наповнення таблиці MedicalRecord
INSERT INTO MedicalRecord (ID, Name, ResponsibleVet, Type, Date, EventDate, EventFee, ExtraInformation)
VALUES (1, 'Vaccination', 1, 'Routine', '2024-01-15', '2024-01-15', 50.00, 'Rabies vaccine'),
       (2, 'Surgery', 2, 'Emergency', '2024-03-10', '2024-03-10', 300.00, 'Fracture repair'),
       (3, 'Checkup', 3, 'Routine', '2024-05-20', '2024-05-20', 75.00, 'Annual wellness exam');

-- Наповнення таблиці MedicalBook
INSERT INTO MedicalBook (ID, ForAnimal)
VALUES (1, 1),
       (2, 2),
       (3, 3);

-- Наповнення таблиці User
INSERT INTO [User] (ID, Login, FullName)
VALUES
    (1, 'john_doe', 'John Doe'), (2, 'jane_smith', 'Jane Smith'), (3, 'alex_brown', 'Alex Brown');

-- Наповнення таблиці ContactInfo
INSERT INTO ContactInfo (ID, Type, Value, Owner)
VALUES (1, 'Email', 'john.doe@example.com', 1),
       (2, 'Phone', '+1234567890', 2),
       (3, 'Email', 'alex.brown@example.com', 3);

-- Наповнення таблиці VetDiploma
INSERT INTO VetDiploma (ID, VetID, University, Specialty, Number, Series)
VALUES (1, 1, 'Harvard University', 'Veterinary Medicine', '12345', 'A123'),
       (2, 2, 'Oxford University', 'Animal Surgery', '67890', 'B456'),
       (3, 3, 'University of Kyiv', 'Exotic Animal Care', '54321', 'C789');

-- Наповнення таблиці VetCertificate
INSERT INTO VetCertificate (ID, VetID, IssuedBy, IssuedFor, ReceivingDate)
VALUES (1, 1, 'American Veterinary Association', 'General Practice', '2020-06-01'),
       (2, 2, 'British Veterinary Association', 'Surgical Procedures', '2021-07-15'),
       (3, 3, 'Ukrainian Veterinary Association', 'Exotic Animals', '2022-05-10');

-- Наповнення таблиці Recommendation
INSERT INTO Recommendation (ID, Name, Description, CreatedAt, CreatedBy, CreatedFor)
VALUES (1, 'Diet Plan', 'High-protein diet recommended', '2024-01-20 10:00:00', 1, 1),
       (2, 'Exercise Plan', 'Daily walks for 30 minutes', '2024-02-15 14:30:00', 2, 1),
       (3, 'Grooming', 'Weekly grooming sessions', '2024-03-10 12:00:00', 3, 2);

-- Наповнення таблиці GuardianshipApplication
INSERT INTO GuardianshipApplication (ID, AnimalID, VetID, ForUserID, HasAnswer, Approved)
VALUES (1, 1, 1, 1, 1, 1),
       (2, 2, 2, 2, 0, 0),
       (3, 3, 3, 3, 1, 0);
