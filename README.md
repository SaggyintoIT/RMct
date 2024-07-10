# Person Management Interface
Live - https://r-mct.vercel.app/

## Interface Overview

This interface provides functionality to manage person records, allowing users to add new persons and retrieve information about them.

### Add New Person Tab (Fig. 1)

![Add New Person Tab](add_new_person_tab.png)

1. **Table Structure:**
   - Name
   - Date of Birth
   - Aadhar Number
   - Mobile Number
   - Age (Automatically calculated using Date of Birth)

2. **Functionality:**
   - Users can add new rows dynamically with empty input fields.
   - Each row has two buttons in the last column:
     - "Save": Saves input information in the list of objects in local storage.
     - "Delete": Removes the row from the table. If the row has been saved, it deletes it from local storage first.

3. **Local Storage Format:**


### Retrieve Information Tab (Fig. 2)

![Retrieve Information Tab](retrieve_information_tab.png)

1. **Functionality:**
- Allows users to retrieve and display information stored in local storage.
- Display information in a readable format, possibly in a table or list view.

## Technologies Used

- HTML, CSS, JavaScript for front-end development.
- Local Storage API for storing and retrieving data locally.
- Possibly use frameworks like React.js or Vue.js for building interactive UI components.

## Getting Started

To run the interface locally:

1. Clone this repository.
2. Open `index.html` in your web browser.

## Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

