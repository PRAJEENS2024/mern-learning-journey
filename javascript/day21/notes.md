# Day 21 - Forms and Validation

---

# 1. Forms

## Definition

Forms are used to collect user information.

Examples:
- Login Form
- Registration Form
- Feedback Form
- Contact Form

---

# Common Form Elements

| Tag | Purpose |
|-----|-----|
| `<form>` | Form container |
| `<input>` | User input |
| `<label>` | Field label |
| `<textarea>` | Multi-line input |
| `<button>` | Submit button |

---

# Example

```html
<form>

    <input type="email">

    <button>
        Login
    </button>

</form>
```

---

# 2. Event Handling

## Definition

Event handling means executing JavaScript code when an event occurs.

---

# Common Events

| Event | Trigger |
|-----|-----|
| click | Mouse click |
| submit | Form submission |
| input | User typing |
| change | Value change |
| keydown | Key press |

---

# Example

```js
button.addEventListener("click", () => {

    console.log("Clicked");

});
```

---

# 3. Form Validation

## Definition

Validation checks whether user input is correct before processing.

---

# Why Validation is Important

Without validation:
- Wrong data enters database
- Invalid email addresses
- Weak passwords
- Empty fields

---

# Actual Flow

```txt
User Input
      ↓
Validation
      ↓
Success
      ↓
Store in Database
```

---

# Important Concept

When user clicks:

```txt
Login
```

or

```txt
Register
```

the application first validates input.

Only after successful validation:

```txt
Data → Database
```

---

# 4. Types of Validation

---

# a. Basic Validation

Uses built-in HTML validation.

---

# Common Attributes

| Attribute | Purpose |
|-----|-----|
| required | Field mandatory |
| type | Input type validation |
| minlength | Minimum length |
| maxlength | Maximum length |

---

# Example

```html
<input
type="email"
required
>
```

---

# Email Validation

```html
<input
type="email"
required
>
```

Browser checks:
```txt
abc@gmail.com
```

Valid

```txt
abcgmail.com
```

Invalid

---

# Password Length Validation

```html
<input
type="password"
minlength="8"
required
>
```

---

# Advantages

- Easy
- No JavaScript needed
- Fast implementation

---

# Limitations

- Limited customization
- Limited validation rules

---

# 5. Advanced Validation

Uses:
```txt
Regular Expressions (Regex)
```

and JavaScript.

---

# Why Advanced Validation?

Used when:
- complex rules required
- custom validation needed
- stronger security needed

---

# Examples

- Strong password validation
- Phone number validation
- Username validation

---

# 6. Regular Expressions (Regex)

## Definition

Regex is a pattern used to match text.

---

# Email Regex Example

```js
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

---

# Validation Example

```js
emailRegex.test(email);
```

Returns:

```txt
true
```

or

```txt
false
```

---

# Phone Number Regex

```js
let phoneRegex = /^[0-9]{10}$/;
```

---

# Valid

```txt
9876543210
```

---

# Invalid

```txt
98765
```

---

# Password Regex Example

```js
let passwordRegex =
/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
```

---

# Rules

Password must contain:
- One uppercase letter
- One number
- Minimum 8 characters

---

# 7. Form Events

---

# submit Event

Triggered when form is submitted.

---

# Example

```js
form.addEventListener("submit", (event) => {

});
```

---

# Why event.preventDefault()?

Normally form refreshes page after submit.

To stop refresh:

```js
event.preventDefault();
```

---

# Example

```js
form.addEventListener("submit",(event)=>{

    event.preventDefault();

});
```

---

# input Event

Runs whenever user types.

---

# Example

```js
input.addEventListener("input",()=>{

});
```

---

# change Event

Runs when value changes and focus leaves field.

---

# Example

```js
input.addEventListener("change",()=>{

});
```

---

# 8. Real World Validation Flow

```txt
User Types Data
        ↓
Basic Validation
        ↓
Advanced Validation
        ↓
Success
        ↓
Send Data to Backend
        ↓
Store in Database
```

---

# Important Points

- Forms collect user data.
- Event handling makes forms interactive.
- Validation prevents invalid data.
- Basic validation uses HTML attributes.
- Advanced validation uses Regex.
- submit event is most important form event.
- Validation always happens before database storage.