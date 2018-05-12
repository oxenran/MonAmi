# MonAmi

![Homepage Screenshot](docs/HomeScreenShot.png)

# Concept
Aging populations are an issue today, both due to increased life expectancy and lowered birth rates. As a result of distance from relatives, busy schedules, or even a lack of living relatives, many elderly are alone a lot of the time. While there are retirement homes and caregiving services, these offerings do not answer a need for elderly that are fully or mostly capable of living on their own. Those elderly (and their families) would benefit from access to a service for their needs. These needs can range from check-ins and chats, help with household chores, or getting to the grocery store and doctor's appointments. Not only will these services help the elderly, they will also help combat feelings of loneliness and depression. We intend to create a platform for the community that would allow people to offer and schedule these types of services for elderly.

# Market Research
There are some services that are contactable by phone or message mainly, but there does not appear to be a website or app that allows quick easy access bookings, visibility of assistants and their profiles, or that provides members of the community a way to sign up for providing these types of services.

# User Personas
  - An elderly person (or their representative) who wants to book assistant services.
  - A member of the local community who wants to assist elderly.

# Technology:
  - Front-end
      - ReactJS
      - Bootstrap
  - Back-end
      - Django as an API
      - SQL database
  - Deployment:
      - AWS (Elastic Beanstalk and S3)

# Current State:
Users can log in.  A logged in user can sign up to be an assistant.  A logged in user can view assistants.  List of assistants can be filtered by services they provide.  User can select the icon for each service they need and the list will automatically filter to those assistants who can provide all services selected.

Assistants have profiles.  Users can view the profile page of an assistant and then book an appointment with that assistant if they wish.  Users can see their scheduled appointments on their Dashboard page.

Site is responsive for mobile and tablet users.

# Potential Additional Features for Future Work:
- Assistants can enter their availability (dates and times) and block off dates not available
- Develop a calendar view of appointments for both Assistant Users and Elderly Users
- Reviews
- Messaging
- Payment
- Additional service categories
- Ability/Requirement for Assistants to upload proof of relevant qualifications/certifications
- Ability/Requirement to provide proof of identity for all users
- Ability/Requirement for Assistants to complete background check
- Ability/Requirement for Assistants to provide references
- Image uploads

# Demos via Youtube:
- [Overview: Homepage, View Assistants, Book an Appointment](https://youtu.be/XkRte8NbgPI)
- [Small Screen](https://youtu.be/vp2jwvTZNl0)
- [More Mobile](https://youtu.be/CUh6bj74D4g)
- [Become an Assistant](https://youtu.be/cktXviTLBeY)
