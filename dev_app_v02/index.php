<?php
// ISO 9001:2015 Planning Application (Version 01)
// This is a simple PHP wrapper for the client-side application
// All functionality is implemented in JavaScript with data stored in local storage
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ISO 9001 Implementation Plan v02</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
<!-- Outer Container with 95% screen width and full viewport height-->
<div class="outer_container w-[95%] h-full bg-white mx-auto">

        <!-- Header -->
        <header class="mb-6">
            <h1 class="text-3xl font-bold inline-block">ISO 9001 Implementation Plan</h1>
            <span class="text-base ml-2">(vers. 01)</span>

            <!-- Color Key -->
            <div class="mt-4 flex flex-wrap gap-4">
                <div class="flex items-center">
                    <div class="w-6 h-6 bg-green-100" style="background-color: #d9f2d9;"></div>
                    <span class="ml-2">PLAN</span>
                </div>
                <div class="flex items-center">
                    <div class="w-6 h-6 bg-blue-100" style="background-color: #d9e6f2;"></div>
                    <span class="ml-2">EXECUTION</span>
                </div>
                <div class="flex items-center">
                    <div class="w-6 h-6 bg-red-100" style="background-color: #f2d9da;"></div>
                    <span class="ml-2">REVIEW</span>
                </div>
                <div class="flex items-center">
                    <div class="w-6 h-6 bg-orange-100" style="background-color: #f2e6d9;"></div>
                    <span class="ml-2">ONGOING</span>
                </div>
            </div>
        </header>

        <!-- Control Panel -->
        <div class="control-panel mb-6 flex flex-wrap gap-2">
            <button id="addTaskBtn" class="px-4 py-2 bg-green-600 text-white rounded" style="background-color: #45a049;">Add Task</button>
            <button id="savePlanBtn" class="px-4 py-2 bg-green-600 text-white rounded" style="background-color: #45a049;">Save Plan</button>
            <button id="loadPlanBtn" class="px-4 py-2 bg-green-600 text-white rounded" style="background-color: #45a049;">Load Plan</button>
            <button id="deleteTaskBtn" class="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50" style="background-color: #ff0000;" disabled>Delete Task</button>
            <button id="clearPlanBtn" class="px-4 py-2 bg-red-600 text-white rounded" style="background-color: #ff0000;">Clear Plan</button>
            <button id="manageTeamBtn" class="px-4 py-2 bg-blue-600 text-white rounded" style="background-color: #3366cc;">Manage Team</button>
        </div>

        <!-- Implementation Plan Table -->
        <div class="overflow-x-auto">
            <table id="implementationPlan" class="w-full border-collapse">
                <!-- Table Header -->
                <thead>
                    <tr class="text-slate-800" style="background-color: #d9e6f2;">
                        <th class="border px-4 py-2 text-center">Task ID</th>
                        <th class="border px-4 py-2 text-center">Task Name</th>
                        <th class="border px-4 py-2 text-center">Document Reference</th>
                        <th class="border px-4 py-2 text-center">Start Date</th>
                        <th class="border px-4 py-2 text-center">Target Date</th>
                        <th class="border px-4 py-2 text-center">% Complete</th>
                        <th class="border px-4 py-2 text-center">Status</th>
                        <th class="border px-4 py-2 text-center">Action/Who</th>
                        <th class="border px-4 py-2 text-center week-column">
                            Week 1<br>
                            <span class="text-sm week-dates"></span>
                        </th>
                        <th class="border px-4 py-2 text-center week-column">
                            Week 2<br>
                            <span class="text-sm week-dates"></span>
                        </th>
                        <th class="border px-4 py-2 text-center week-column">
                            Week 3<br>
                            <span class="text-sm week-dates"></span>
                        </th>
                        <th class="border px-4 py-2 text-center week-column">
                            Week 4<br>
                            <span class="text-sm week-dates"></span>
                        </th>
                    </tr>
                </thead>
                <tbody id="planTableBody">
                    <!-- Table content will be dynamically generated -->
                </tbody>
            </table>
        </div>

</div>

    <!-- Context Menu for Adding Tasks -->
    <div id="contextMenu" class="hidden absolute bg-white shadow-md rounded p-2 z-10">
        <button id="addAboveBtn" class="block w-full text-left px-2 py-1 hover:bg-gray-100">Add Task Above</button>
        <button id="deleteTaskBtn" class="block w-full text-left px-2 py-1 hover:bg-gray-100">Delete Task</button>
        <button id="addBelowBtn" class="block w-full text-left px-2 py-1 hover:bg-gray-100">Add Task Below</button>
    </div>

    <!-- Modal for Adding/Editing Tasks -->
    <div id="taskModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <div class="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 id="modalTitle" class="text-xl font-bold mb-4">Add New Task</h2>
            <form id="taskForm">
                <div class="mb-4">
                    <label for="taskName" class="block mb-1">Task Name:</label>
                    <input type="text" id="taskName" class="w-full border rounded px-2 py-1" required>
                </div>
                <div class="mb-4">
                    <label for="docReference" class="block mb-1">Document Reference:</label>
                    <input type="text" id="docReference" class="w-full border rounded px-2 py-1">
                </div>
                <div class="flex justify-end gap-2">
                    <button type="button" id="cancelTaskBtn" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded" style="background-color: #45a049;">Save</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Team Members Modal -->
    <div id="teamModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
        <div class="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 class="text-xl font-bold mb-4">Manage Team Members</h2>
            <div class="mb-4">
                <label for="newMember" class="block mb-1">Add New Team Member:</label>
                <div class="flex">
                    <input type="text" id="newMember" class="flex-grow border rounded px-2 py-1">
                    <button id="addMemberBtn" class="ml-2 px-4 py-1 bg-green-600 text-white rounded" style="background-color: #45a049;">Add</button>
                </div>
            </div>
            <div class="mb-4">
                <h3 class="font-bold mb-2">Current Team Members:</h3>
                <ul id="teamMembersList" class="list-disc pl-5">
                    <!-- Team members will be listed here -->
                </ul>
            </div>
            <div class="flex justify-end">
                <button id="closeTeamModalBtn" class="px-4 py-2 bg-gray-300 rounded">Close</button>
            </div>
        </div>
    </div>

    <script src="js/app.js"></script>

</body>
</html>
