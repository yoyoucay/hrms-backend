## Employees
CREATE TABLE Employees (
    iEmployeeID INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    sEmpID VARCHAR(20) UNIQUE NOT NULL,
    sFullName VARCHAR(100) NOT NULL,
    sEmail VARCHAR(255) UNIQUE,
    sDepartment VARCHAR(50),
    sRole VARCHAR(50),
    dtHireDate DATE DEFAULT CURRENT_DATE,
    
    -- Safety Data
    iSafetyYet INTEGER DEFAULT 0,
    dtLastSafetyTraining DATE,
    
    -- Tracking & Audit
    iStatus INTEGER DEFAULT 1,
    iCreateBy INTEGER,
    dtCreateAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    iModifyBy INTEGER,
    dtModifyAt TIMESTAMP WITH TIME ZONE
);

## Account 
CREATE TABLE Accounts (
    iAccountID INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    iEmployeeID INTEGER UNIQUE NOT NULL REFERENCES Employees(iEmployeeID) ON DELETE CASCADE,
    
    -- Tracking & Audit
    iStatus INTEGER DEFAULT 1,
    iCreateBy INTEGER,
    dtCreateAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    iModifyBy INTEGER,
    dtModifyAt TIMESTAMP WITH TIME ZONE
);

## Password
CREATE TABLE Passwords (
    iPasswordID INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    iAccountID INTEGER UNIQUE NOT NULL REFERENCES Accounts(iAccountID) ON DELETE CASCADE,
    sPassword TEXT NOT NULL,
    
    -- Tracking & Audit
    iStatus INTEGER DEFAULT 1, -- Can be used to "expire" a password
    iCreateBy INTEGER,
    dtCreateAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    iModifyBy INTEGER,
    dtModifyAt TIMESTAMP WITH TIME ZONE
);