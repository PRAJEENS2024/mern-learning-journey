# Day 01 - Web Basics

---

# 1. Protocol

## Definition
A protocol is a set of rules used for communication between devices over a network.

It defines:
- How data is sent
- How data is received
- Format of communication

Without protocols, devices cannot understand each other.

## Common Protocols

### HTTP
HyperText Transfer Protocol

Used for communication between browser and web server.

Example:
http://example.com

### HTTPS
HyperText Transfer Protocol Secure

Secure version of HTTP using encryption.

Example:
https://google.com

### FTP
File Transfer Protocol

Used to transfer files between systems.

### TCP/IP
Transmission Control Protocol / Internet Protocol

Main communication protocol used in the internet.

---

# 2. IP Address

## Definition
IP Address stands for Internet Protocol Address.

It is a unique address given to every device connected to a network.

Example:
192.168.1.1

Just like a house address identifies a house,
an IP address identifies a device.

---

# Types of IP Address

## a. IPv4

- 32-bit address
- Most commonly used
- Contains numbers separated by dots

Example:
192.168.0.1

### Range
0.0.0.0 to 255.255.255.255

---

## b. IPv6

- 128-bit address
- Introduced because IPv4 addresses are limited
- Uses hexadecimal numbers

Example:
2001:0db8:85a3:0000:0000:8a2e:0370:7334

---

# Other Classifications

## Public IP

Used on the internet.
Provided by Internet Service Provider (ISP).

## Private IP

Used inside local networks like:
- Home WiFi
- College lab
- Office network

Example:
192.168.x.x

## Static IP

Does not change.

## Dynamic IP

Changes automatically over time.

---

# 3. Domain Name Register

## Definition

A domain name is the human-readable name of a website.

Example:
google.com

Instead of remembering IP addresses,
users remember domain names.

---

# Domain Registrar

A Domain Registrar is a company where domain names are purchased.

Examples:
- GoDaddy
- Namecheap
- Google Domains

---

# Working of Domain Name System

## Step-by-Step Process

### Step 1
User enters:
google.com

### Step 2
Browser asks DNS server:
"What is the IP address of google.com?"

### Step 3
DNS server returns the IP address.

Example:
142.250.183.14

### Step 4
Browser connects to that server using the IP address.

### Step 5
Website loads in the browser.

---

# Simple Flow

User → Browser → DNS → IP Address → Web Server → Website

---

# Important Points

- Protocol defines communication rules.
- IP address identifies devices.
- Domain names are easy-to-remember website names.
- DNS converts domain names into IP addresses.