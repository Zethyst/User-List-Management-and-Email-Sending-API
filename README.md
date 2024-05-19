<h1 align="center">User List Management and Email Sending API</h1>

## 🖥️ Tech Stack

**Backend:**

![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![expressjs](https://img.shields.io/badge/Express.js-F7DF1E?style=for-the-badge&logo=express&logoColor=black)&nbsp;
![mongodb](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;


## 📌 Screenshots:
![list](/assets/createList.png)
![csv](/assets/csvUpload.png)
![users](/assets/userDatabase.png)
![emailAPI](/assets/emailAPI.png)
![email](/assets/email.png)
![unsubscribe](/assets/unsubscribeAPI.png)
![unsubscribeAPI](/assets/unsubscribeDatabase.png)

## 🛠️ API Endpoints

1. **List Creation Endpoint**
    - **Endpoint:** `POST /api/lists`
    - **Method:** `POST`
    - **Description:**  Create a new list with a title and custom properties such as gender, age, city.

2. **User Addition via CSV Upload**
    - **Endpoint:** `POST /api/users/:listId/upload`
    - **Method:** `POST`
    - **Description:**  Add users to a list via CSV file upload.

3. **Send Email to List**
    - **Endpoint:** `POST /api/emails/:listId/send`
    - **Method:** `POST`
    - **Description:**  Send an email to all users in a list.

4. **Unsubscribe Endpoint**
    - **Endpoint:** `POST /api/emails/unsubscribe`
    - **Method:** `POST`
    - **Description:**  Unsubscribe a user from the list.

<h2>📬 Contact</h2>

If you want to contact me, you can reach me through the below handle.

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akshat-jaiswal-4664a2197)

© 2024 Akshat Jaiswal

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
