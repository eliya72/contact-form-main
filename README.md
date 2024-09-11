# Frontend Mentor - Contact form
### Design preview for the Contact form coding challenge
![Design preview for the Contact form coding challenge](./design/desktop-preview.jpg)

## Table of contents
- [Author](#author)
- [The challenge](#the-challenge)
- [Built with](#built-with)
- [Screenshot](#screenshot)
- [My Solution](#my-solution)
- [Local Run with PHP and XAMPP](#local-run-with-php-and-xampp)
- 


## Author
#### Reference 
- Frontend Mentor - [@eliya72](https://www.frontendmentor.io/profile/eliya72)

## The challenge

Users should be able to: 

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Built with

- HTML5
- CSS3
- Flexbox
- Vanilla JS
- PHP
- XAMPP
- NodeJS

## Screenshot

- #### PC 1920 x 1080
![Screenshot 2024-09-06 125113](https://github.com/user-attachments/assets/5ea141c4-1673-468f-8e12-e6afc8c8c715)
- #### Tablet 1200 x 865 
![Screenshot 2024-09-06 130157](https://github.com/user-attachments/assets/6f763356-4063-4c57-a2bb-44b629d3266a)
- #### Smartphone 430 x 932 (from 600 x ???)
![Screenshot 2024-09-06 130431](https://github.com/user-attachments/assets/586bb7a6-910d-451a-9f81-e889f11e2940)

## My Solution
### The Form supports all languages (special latin symbols, cyrillic etc.)
```html
<input type="text" pattern="[\p{L}\s]+" required />
```

- #### When user tries to submit an empty form or half-filled, the site indicates that this is impossible without beforehand filled fileds (before submitting the form, all fiellds must be entered with corresponding data except the message section, user can leave it clear)
![Screenshot 2024-09-06 130959](https://github.com/user-attachments/assets/c4650622-fe92-4482-8786-84f40d0d03a5)
![Screenshot 2024-09-06 134637](https://github.com/user-attachments/assets/fef4e509-1c61-439d-b7f7-203323c97ca9)
- #### If user fills required field with an incorrect format (for example the user puts numbers in his name or tries to submit field mail without special symbol "@")
![Screenshot 2024-09-06 134516](https://github.com/user-attachments/assets/78d3ecfe-3d41-4569-a3b9-7a150d3bcd29)
![Screenshot 2024-09-06 134753](https://github.com/user-attachments/assets/8f0f0218-90c4-4c69-a099-775d546b4bdf)
- #### After succssesfully submiting the form, site announces that user's data was succssesfully sent and waiting for to be responded shortly
![Screenshot 2024-09-06 135441](https://github.com/user-attachments/assets/1af13230-009e-45a3-b25e-692dad10e83b)
### Local Run with PHP and XAMPP
#### With a connected php code, a running & configurated xampp apache module and enabled 2-Step Verification on Google Account with generated and inserted in sendmail.ini file in auth_password=... a 16-character App Password, the email was received with a corresponding data
![Untitled](https://github.com/user-attachments/assets/34e7ab4a-0b49-41ed-8e5b-21e75b989408)
### With NodeJS
#### Unfortunately Netlify and 

