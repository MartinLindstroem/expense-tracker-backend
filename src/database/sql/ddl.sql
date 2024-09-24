CREATE DATABASE expense_tracker;

CREATE TABLE IF NOT EXISTS categories(
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    user_id VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS expenses(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    expense_name VARCHAR(50) NOT NULL,
    expense_amount INTEGER NOT NULL,
    expense_date DATE NOT NULL,
    expense_category INT NOT NULL,
    CONSTRAINT expense_category
      FOREIGN KEY(expense_category) 
      REFERENCES categories(id)
);