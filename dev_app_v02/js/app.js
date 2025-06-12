// Global variables
let phases = [
    {id: 1, name: "LEARN"},
    {id: 2, name: "PLAN"},
    {id: 3, name: "DEFINE"},
    {id: 4, name: "BUILD"},
    {id: 5, name: "LAUNCH"},
    {id: 6, name: "REVIEW"},
    {id: 7, name: "ASSESSMENT"}
];

let predefinedTasks = [
    // Phase 1: LEARN
    {
        id: 1,
        phaseId: 1,
        name: "Acquire BS EN ISO 9001:2015 and associated documents",
        docRef: "BS EN ISO 9001:2015",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 2,
        phaseId: 1,
        name: "Top Management Commitment",
        docRef: "Quality Management Principles (ISO 9000:2005)",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 3,
        phaseId: 1,
        name: "Choose a Registrar & Define Scope of Certification",
        docRef: "DQS Frankfurt / TÜV Wiesbaden",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 4,
        phaseId: 1,
        name: "Conduct a Gap Analysis",
        docRef: "Gap Analysis",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 5,
        phaseId: 1,
        name: "Management Review",
        docRef: "Review of Completion",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },

    // Phase 2: PLAN
    {
        id: 6,
        phaseId: 2,
        name: "Establish an Implementation Team",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 7,
        phaseId: 2,
        name: "Develop the Implementation Plan (this document)",
        docRef: "ISO 9001 Implementation Plan (this document)",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 8,
        phaseId: 2,
        name: "Identify Key Processes",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 9,
        phaseId: 2,
        name: "Involve & Communicate with Employees",
        docRef: "Exployee Awareness Presentation",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 10,
        phaseId: 2,
        name: "Management Review",
        docRef: "Review of Completion",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },

    // Phase 3: DEFINE
    {
        id: 11,
        phaseId: 3,
        name: "Define the Quality Policy",
        docRef: "Quality Policy Revision 1",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 12,
        phaseId: 3,
        name: "Communicate the Quality Policy",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 13,
        phaseId: 3,
        name: "Define the Quality Objectives",
        docRef: "Quality Manual Revision 1",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 14,
        phaseId: 3,
        name: "Establish Roles & Responsibilities",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 15,
        phaseId: 3,
        name: "Management Review",
        docRef: "Review of Completion",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },

    // Phase 4: BUILD
    {
        id: 16,
        phaseId: 4,
        name: "Develop the Quality Manual",
        docRef: "Quality Manual - Final Revision",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 17,
        phaseId: 4,
        name: "Develop the Mandatory Standard Operating Procedures",
        docRef: "Mandatory Procedures Templates",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 18,
        phaseId: 4,
        name: "Develop the Operational Procedures (Work Instructions)",
        docRef: "Operational Procedures Templates",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 19,
        phaseId: 4,
        name: "Select and Train Internal Auditors",
        docRef: "Internal Auditor Training",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 20,
        phaseId: 4,
        name: "Execute Initial Internal Audit",
        docRef: "Review of Completion",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 21,
        phaseId: 4,
        name: "Develop Audit Reporting System",
        docRef: "Internal Audit Awareness",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 22,
        phaseId: 4,
        name: "Define Responsibilities",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 23,
        phaseId: 4,
        name: "Integration into QMS / SOPs / WIs",
        docRef: "Internal Audit Checklist for Company",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 24,
        phaseId: 4,
        name: "Management Review",
        docRef: "Review of Completion",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },

    // Phase 5: LAUNCH
    {
        id: 25,
        phaseId: 5,
        name: "Provide Employee Training on all aspects of the QMS",
        docRef: "Key Process Audit Checklists",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 26,
        phaseId: 5,
        name: "Implement the Quality Management System",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 27,
        phaseId: 5,
        name: "Formal Internal Audit the Quality System",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 28,
        phaseId: 5,
        name: "Management Review",
        docRef: "Review of Completion",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },

    // Phase 6: REVIEW
    {
        id: 29,
        phaseId: 6,
        name: "Begin Process Auditing",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 30,
        phaseId: 6,
        name: "Implement System Changes",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 31,
        phaseId: 6,
        name: "Refine the System",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 32,
        phaseId: 6,
        name: "Management Review",
        docRef: "Review of Completion",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },

    // Phase 7: ASSESSMENT
    {
        id: 33,
        phaseId: 7,
        name: "Certification Body Preliminaries",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 34,
        phaseId: 7,
        name: "Pre-assessment Audit",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 35,
        phaseId: 7,
        name: "Correct Non-conformances & Corrective Action",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 36,
        phaseId: 7,
        name: "Final Management Review",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 37,
        phaseId: 7,
        name: "Certification Day",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 38,
        phaseId: 7,
        name: "Surveillance Audits",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    },
    {
        id: 39,
        phaseId: 7,
        name: "Maintain and Improve the QMS",
        docRef: "",
        startDate: "",
        targetDate: "",
        complete: 0,
        status: "Not Started",
        actionWho: ""
    }
];

let tasks = [];
let teamMembers = [];
let nextTaskId = 40; // Start after the predefined tasks
let selectedTaskId = null;
let contextMenuTaskId = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    setupEventListeners();
});

// Initialize the application
function initializeApp() {
    // Set the week dates
    setWeekDates();

    // Load data from local storage or use predefined tasks
    loadData();

    // Render the table
    renderTable();
}

// Set the week dates (starting from next Monday)
function setWeekDates() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ...
    const daysUntilNextMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;

    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + daysUntilNextMonday);

    const weekDateElements = document.querySelectorAll('.week-dates');

    for (let i = 0; i < weekDateElements.length; i++) {
        const weekStartDate = new Date(nextMonday);
        weekStartDate.setDate(nextMonday.getDate() + (i * 7));

        const weekEndDate = new Date(weekStartDate);
        weekEndDate.setDate(weekStartDate.getDate() + 4); // Friday is 4 days after Monday

        const startDay = weekStartDate.getDate();
        const endDay = weekEndDate.getDate();
        const startMonth = weekStartDate.getMonth() + 1; // Months are 0-indexed
        const endMonth = weekEndDate.getMonth() + 1;

        weekDateElements[i].textContent = `${startDay}.${startMonth < 10 ? '0' + startMonth : startMonth}.-${endDay}.${endMonth < 10 ? '0' + endMonth : endMonth}`;
    }
}

// Load data from local storage or use predefined tasks
function loadData() {
    const savedTasks = localStorage.getItem('iso9001Tasks');
    const savedTeamMembers = localStorage.getItem('iso9001TeamMembers');

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        // Find the highest task ID to set nextTaskId
        nextTaskId = Math.max(...tasks.map(task => task.id)) + 1;
    } else {
        tasks = [...predefinedTasks];
    }

    if (savedTeamMembers) {
        teamMembers = JSON.parse(savedTeamMembers);
    }
}

// Save data to local storage
function saveData() {
    localStorage.setItem('iso9001Tasks', JSON.stringify(tasks));
    localStorage.setItem('iso9001TeamMembers', JSON.stringify(teamMembers));
}

// Render the implementation plan table
function renderTable() {
    const tableBody = document.getElementById('planTableBody');
    tableBody.innerHTML = '';

    // Group tasks by phase
    const tasksByPhase = {};
    phases.forEach(phase => {
        tasksByPhase[phase.id] = tasks.filter(task => task.phaseId === phase.id);
    });

    // Render each phase and its tasks
    phases.forEach(phase => {
        const phaseTasks = tasksByPhase[phase.id];
        const phaseCompletion = calculatePhaseCompletion(phaseTasks);

        // Create rows for each task in the phase
        phaseTasks.forEach((task, index) => {
            const row = document.createElement('tr');
            row.setAttribute('data-task-id', task.id);

            // Task ID column (with phase and task number)
            const taskIdCell = document.createElement('td');
            taskIdCell.className = 'task-id-container';

            // Only show phase on the first task of each phase
            if (index === 0) {
                const phaseColumn = document.createElement('div');
                phaseColumn.className = 'phase-column';

                const phaseText = document.createElement('div');
                phaseText.className = 'phase-text';
                phaseText.textContent = phase.name;

                phaseColumn.appendChild(phaseText);
                taskIdCell.appendChild(phaseColumn);
            } else {
                const spacer = document.createElement('div');
                spacer.className = 'phase-column';
                taskIdCell.appendChild(spacer);
            }

            const taskNumberColumn = document.createElement('div');
            taskNumberColumn.className = 'task-number-column';
            taskNumberColumn.textContent = task.id;
            taskIdCell.appendChild(taskNumberColumn);

            row.appendChild(taskIdCell);

            // Task Name
            const nameCell = document.createElement('td');
            nameCell.textContent = task.name;
            nameCell.addEventListener('contextmenu', function (e) {
                e.preventDefault();
                showContextMenu(e, task.id);
            });
            row.appendChild(nameCell);

            // Document Reference
            const docRefCell = document.createElement('td');
            const docRefInput = document.createElement('input');
            docRefInput.type = 'text';
            docRefInput.value = task.docRef || '';
            docRefInput.className = 'w-full border rounded px-2 py-1';
            docRefInput.addEventListener('change', function () {
                updateTaskProperty(task.id, 'docRef', this.value);
            });
            docRefCell.appendChild(docRefInput);
            row.appendChild(docRefCell);

            // Start Date
            const startDateCell = document.createElement('td');
            const startDateInput = document.createElement('input');
            startDateInput.type = 'date';
            startDateInput.value = task.startDate || '';
            startDateInput.className = 'w-full border rounded px-2 py-1';
            startDateInput.addEventListener('change', function () {
                updateTaskProperty(task.id, 'startDate', this.value);
            });
            startDateCell.appendChild(startDateInput);
            row.appendChild(startDateCell);

            // Target Date
            const targetDateCell = document.createElement('td');
            const targetDateInput = document.createElement('input');
            targetDateInput.type = 'date';
            targetDateInput.value = task.targetDate || '';
            targetDateInput.className = 'w-full border rounded px-2 py-1';
            targetDateInput.addEventListener('change', function () {
                if (startDateInput.value && this.value && new Date(this.value) < new Date(startDateInput.value)) {
                    alert('Target date cannot be before start date');
                    this.value = task.targetDate || '';
                    return;
                }
                updateTaskProperty(task.id, 'targetDate', this.value);
            });
            targetDateCell.appendChild(targetDateInput);
            row.appendChild(targetDateCell);

            // Completion Percentage
            const completeCell = document.createElement('td');
            completeCell.textContent = task.complete + '%';
            completeCell.className = getCompletionClass(task.complete);
            row.appendChild(completeCell);

            // Status
            const statusCell = document.createElement('td');
            const statusSelect = document.createElement('select');
            statusSelect.className = 'w-full border rounded px-2 py-1';

            const statuses = ['Not Started', 'Ongoing', 'Complete', 'Overdue'];
            statuses.forEach(status => {
                const option = document.createElement('option');
                option.value = status;
                option.textContent = status;
                if (status === task.status) {
                    option.selected = true;
                }
                statusSelect.appendChild(option);
            });

            statusSelect.addEventListener('change', function () {
                updateTaskStatus(task.id, this.value);
            });

            statusCell.className = getStatusClass(task.status);
            statusCell.appendChild(statusSelect);
            row.appendChild(statusCell);

            // Action/Who
            const actionWhoCell = document.createElement('td');
            const actionWhoSelect = document.createElement('select');
            actionWhoSelect.className = 'w-full border rounded px-2 py-1';

            // Add empty option
            const emptyOption = document.createElement('option');
            emptyOption.value = '';
            emptyOption.textContent = 'Select...';
            actionWhoSelect.appendChild(emptyOption);

            // Add team members
            teamMembers.forEach(member => {
                const option = document.createElement('option');
                option.value = member;
                option.textContent = member;
                if (member === task.actionWho) {
                    option.selected = true;
                }
                actionWhoSelect.appendChild(option);
            });

            actionWhoSelect.addEventListener('change', function () {
                updateTaskProperty(task.id, 'actionWho', this.value);
            });

            // Add button to manage team members
            const manageTeamBtn = document.createElement('button');
            manageTeamBtn.textContent = '+';
            manageTeamBtn.className = 'ml-2 px-2 py-1 bg-gray-200 rounded';
            manageTeamBtn.addEventListener('click', showTeamModal);

            actionWhoCell.appendChild(actionWhoSelect);
            actionWhoCell.appendChild(manageTeamBtn);
            row.appendChild(actionWhoCell);

            // Weekly planning columns (4 weeks)
            for (let week = 1; week <= 4; week++) {
                const weekCell = document.createElement('td');
                const weekGrid = document.createElement('div');
                weekGrid.className = 'week-grid';

                // Create the 4-section grid
                const activities = ['plan', 'execution', 'review', 'ongoing'];
                const colors = {
                    'plan': '#d9f2d9',
                    'execution': '#d9e6f2',
                    'review': '#f2d9d9',
                    'ongoing': '#f2e6d9'
                };

                activities.forEach(activity => {
                    const gridCell = document.createElement('div');
                    gridCell.className = 'grid-cell';
                    gridCell.setAttribute('data-activity', activity);

                    // Check if this activity is active for this task and week
                    if (task[`week${week}_${activity}`]) {
                        gridCell.style.backgroundColor = colors[activity];
                        gridCell.setAttribute('data-active', 'true');
                    }

                    gridCell.addEventListener('click', function () {
                        const isActive = this.getAttribute('data-active') === 'true';

                        // Toggle the activity
                        if (isActive) {
                            this.style.backgroundColor = '';
                            this.setAttribute('data-active', 'false');
                            updateTaskProperty(task.id, `week${week}_${activity}`, false);
                        } else {
                            this.style.backgroundColor = colors[activity];
                            this.setAttribute('data-active', 'true');
                            updateTaskProperty(task.id, `week${week}_${activity}`, true);
                        }
                    });

                    weekGrid.appendChild(gridCell);
                });

                weekCell.appendChild(weekGrid);
                row.appendChild(weekCell);
            }

            tableBody.appendChild(row);
        });
    });

    // Update the Delete Task button state
    updateDeleteButtonState();
}

// Calculate phase completion percentage
function calculatePhaseCompletion(phaseTasks) {
    if (phaseTasks.length === 0) return 0;

    let totalPoints = 0;
    let maxPoints = phaseTasks.length * 10; // 10 points per task

    phaseTasks.forEach(task => {
        switch (task.status) {
            case 'Complete':
                totalPoints += 10;
                break;
            case 'Ongoing':
                totalPoints += 5;
                break;
            default:
                totalPoints += 0;
        }
    });

    return Math.round((totalPoints / maxPoints) * 100);
}

// Get CSS class for completion percentage
function getCompletionClass(percentage) {
    if (percentage < 30) {
        return 'completion-low';
    } else if (percentage <= 80) {
        return 'completion-medium';
    } else {
        return 'completion-high';
    }
}

// Get CSS class for status
function getStatusClass(status) {
    switch (status) {
        case 'Not Started':
            return 'status-not-started';
        case 'Overdue':
            return 'status-overdue';
        case 'Ongoing':
            return 'status-ongoing';
        case 'Complete':
            return 'status-complete';
        default:
            return '';
    }
}

// Update task property
function updateTaskProperty(taskId, property, value) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex][property] = value;
        saveData();
    }
}

// Update task status and recalculate completion
function updateTaskStatus(taskId, status) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].status = status;

        // Update completion percentage based on status
        switch (status) {
            case 'Complete':
                tasks[taskIndex].complete = 100;
                break;
            case 'Ongoing':
                tasks[taskIndex].complete = 50;
                break;
            default:
                tasks[taskIndex].complete = 0;
        }

        saveData();
        renderTable(); // Re-render to update completion percentages
    }
}

// Show context menu for adding tasks
function showContextMenu(event, taskId) {
    const contextMenu = document.getElementById('contextMenu');
    contextMenuTaskId = taskId;

    // Position the context menu
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;
    contextMenu.classList.remove('hidden');

    // Close the context menu when clicking elsewhere
    document.addEventListener('click', hideContextMenu);
}

// Hide the context menu
function hideContextMenu() {
    document.getElementById('contextMenu').classList.add('hidden');
    document.removeEventListener('click', hideContextMenu);
}

// Show the task modal for adding a new task
function showTaskModal(position) {
    const modal = document.getElementById('taskModal');
    const modalTitle = document.getElementById('modalTitle');
    const taskForm = document.getElementById('taskForm');

    modalTitle.textContent = 'Add New Task';
    taskForm.reset();

    // Store the position and reference task ID
    taskForm.setAttribute('data-position', position);
    taskForm.setAttribute('data-ref-task-id', contextMenuTaskId);

    modal.classList.remove('hidden');
}

// Show the team members modal
function showTeamModal() {
    const modal = document.getElementById('teamModal');
    const teamList = document.getElementById('teamMembersList');

    // Clear the list
    teamList.innerHTML = '';

    // Add each team member to the list
    teamMembers.forEach(member => {
        const li = document.createElement('li');
        li.textContent = member;
        teamList.appendChild(li);
    });

    modal.classList.remove('hidden');
}

// Add a new task
function addTask(name, docRef, position, refTaskId) {
    const refTaskIndex = tasks.findIndex(task => task.id === refTaskId);
    if (refTaskIndex === -1) return;

    const refTask = tasks[refTaskIndex];
    const newTask = {
        id: nextTaskId++,
        phaseId: refTask.phaseId,
        name: name,
        docRef: docRef,
        startDate: '',
        targetDate: '',
        complete: 0,
        status: 'Not Started',
        actionWho: ''
    };

    // Insert the task at the appropriate position
    if (position === 'above') {
        tasks.splice(refTaskIndex, 0, newTask);
    } else {
        tasks.splice(refTaskIndex + 1, 0, newTask);
    }

    saveData();
    renderTable();

    // Enable the delete button since we now have a user-created task
    document.getElementById('deleteTaskBtn').disabled = false;
}

// Delete the selected task
function deleteTask() {
    if (!selectedTaskId) return;

    // Check if the task is a predefined task (ID <= 39)
    if (selectedTaskId <= 39) {
        alert('Predefined tasks cannot be deleted.');
        return;
    }

    const taskIndex = tasks.findIndex(task => task.id === selectedTaskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        saveData();
        renderTable();
        selectedTaskId = null;
    }
}

// Add a new team member
function addTeamMember(name) {
    if (!name.trim()) return;

    // Check if the member already exists
    if (teamMembers.includes(name.trim())) {
        alert('This team member already exists.');
        return;
    }

    teamMembers.push(name.trim());
    saveData();

    // Refresh the team members list
    const teamList = document.getElementById('teamMembersList');
    const li = document.createElement('li');
    li.textContent = name.trim();
    teamList.appendChild(li);

    // Clear the input field
    document.getElementById('newMember').value = '';

    // Refresh the action/who dropdowns
    renderTable();
}

// Clear the current plan (reset to predefined tasks)
function clearPlan() {
    if (confirm('Are you sure you want to clear the current plan? This will reset all tasks to their default state.')) {
        tasks = [...predefinedTasks];
        nextTaskId = 40;
        saveData();
        renderTable();
    }
}

// Update the state of the Delete Task button
function updateDeleteButtonState() {
    const deleteBtn = document.getElementById('deleteTaskBtn');

    // Check if there are any user-created tasks (ID > 39)
    const hasUserTasks = tasks.some(task => task.id > 39);
    deleteBtn.disabled = !hasUserTasks;
}

// Setup event listeners
function setupEventListeners() {
    // Add Task button
    document.getElementById('addTaskBtn').addEventListener('click', function () {
        // If no task is selected, use the first task as reference
        contextMenuTaskId = selectedTaskId || tasks[0].id;
        showTaskModal('below');
    });

    // Delete Task button
    document.getElementById('deleteTaskBtn').addEventListener('click', deleteTask);

    // Save Plan button
    document.getElementById('savePlanBtn').addEventListener('click', function () {
        saveData();
        alert('Plan saved successfully!');
    });

    // Clear Plan button
    document.getElementById('clearPlanBtn').addEventListener('click', clearPlan);

    // Load Plan button
    document.getElementById('loadPlanBtn').addEventListener('click', function () {
        loadData();
        renderTable();
        alert('Plan loaded successfully!');
    });

    // Manage Team button
    document.getElementById('manageTeamBtn').addEventListener('click', showTeamModal);

    // Context menu buttons
    document.getElementById('addAboveBtn').addEventListener('click', function () {
        showTaskModal('above');
    });

    document.getElementById('addBelowBtn').addEventListener('click', function () {
        showTaskModal('below');
    });

    // Task form submission
    document.getElementById('taskForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const docRef = document.getElementById('docReference').value;
        const position = this.getAttribute('data-position');
        const refTaskId = parseInt(this.getAttribute('data-ref-task-id'));

        addTask(taskName, docRef, position, refTaskId);

        // Hide the modal
        document.getElementById('taskModal').classList.add('hidden');
    });

    // Cancel task button
    document.getElementById('cancelTaskBtn').addEventListener('click', function () {
        document.getElementById('taskModal').classList.add('hidden');
    });

    // Add team member button
    document.getElementById('addMemberBtn').addEventListener('click', function () {
        const newMember = document.getElementById('newMember').value;
        addTeamMember(newMember);
    });

    // Close team modal button
    document.getElementById('closeTeamModalBtn').addEventListener('click', function () {
        document.getElementById('teamModal').classList.add('hidden');
    });

    // Table row selection
    document.addEventListener('click', function (e) {
        const row = e.target.closest('tr');
        if (row && row.hasAttribute('data-task-id')) {
            // Deselect previously selected row
            const selectedRow = document.querySelector('tr.selected');
            if (selectedRow) {
                selectedRow.classList.remove('selected');
            }

            // Select the clicked row
            row.classList.add('selected');
            selectedTaskId = parseInt(row.getAttribute('data-task-id'));
        }
    });

    // Delete Task button in context menu
    document.getElementById('deleteTaskBtn')
        .addEventListener('click', function (e) {
            deleteTask();        // call delete logic
            hideContextMenu();
        });

}
