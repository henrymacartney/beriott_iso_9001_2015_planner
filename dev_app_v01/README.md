# ISO 9001:2015 Planning Application (Version 01)

A web-based application for planning and tracking ISO 9001:2015 implementation across multiple phases and tasks.

## Overview

This application replaces an Excel-based system for planning and tracking ISO 9001:2015 implementation. It provides a structured approach to managing the ISO 9001:2015 implementation process across 7 phases and predefined tasks.

## Features

- Track the progress of ISO 9001:2015 implementation across 7 phases
- Manage individual tasks within each phase
- Record document references, start dates, and target dates for each task
- Track task status and completion percentages
- Assign responsibilities for task execution
- Plan activities across a 4-week timeline
- Save and load implementation plans using local storage

## Installation

1. Clone or download this repository
2. Place the files on a PHP-enabled web server
3. Access the application through a web browser

## Usage

### Getting Started

When you first open the application, it will load with all predefined phases and tasks. No previous plan is loaded by default.

### Control Panel

The control panel at the top of the application provides the following functions:

- **Add Task**: Add a new task to the implementation plan
- **Delete Task**: Delete a user-created task (predefined tasks cannot be deleted)
- **Save Plan**: Save the current implementation plan to local storage
- **Clear Plan**: Reset the plan to its default state
- **Load Plan**: Load a previously saved implementation plan from local storage
- **Manage Team**: Open the team management modal to add team members

### Managing Tasks

- **Adding Tasks**: Click the "Add Task" button or right-click on a task and select "Add Task Above" or "Add Task Below"
- **Editing Tasks**: Click on the input fields to edit task details
- **Setting Dates**: Use the date pickers to set start and target dates
- **Updating Status**: Select a status from the dropdown menu (Not Started, Ongoing, Complete, Overdue)
- **Assigning Responsibility**: Select a team member from the dropdown menu

### Weekly Planning

Each task has a 4-week planning grid with four sections:

- **Plan** (Light green)
- **Execution** (Light blue)
- **Review** (Light red)
- **Ongoing** (Light orange)

Click on a section to toggle its active state.

### Team Management

- Click the "Manage Team" button to open the team management modal
- Add new team members using the input field and "Add" button
- Team members will appear in the dropdown menus for task responsibility assignment

## Data Structure

### Phases

The application organizes tasks into the following 7 phases:

1. LEARN
2. PLAN
3. DEFINE
4. BUILD
5. LAUNCH
6. REVIEW
7. ASSESSMENT

### Tasks

Each phase contains predefined tasks as specified in the requirements document. Tasks have the following attributes:

- ID: A unique identifier for the task
- Name: A descriptive name for the task
- Document Reference: A reference to associated documentation
- Start Date: The planned start date for the task
- Target Date: The planned completion date for the task
- Status: The current status of the task (Not Started, Overdue, Ongoing, Complete)
- Action/Who: The person or team responsible for the task

## Technical Details

- The application is built using PHP, JavaScript, HTML, and CSS
- Styling is implemented using Tailwind CSS
- Data is stored in the browser's local storage
- The application is compatible with modern web browsers (Chrome, Firefox, Edge, Safari)

## Limitations

- Data is stored only in the browser's local storage
- No multi-user collaboration features
- No cloud synchronization
- Limited to 4 weeks of planning
- No ability to add custom phases (only custom tasks)
- No printing or export functionality

## License

This project is licensed under the MIT License.