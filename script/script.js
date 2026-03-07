
async function loadAllIssues() {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    try {
        const res = await fetch(url)
        const json = await res.json()
        displayALlIssues(json.data)
        getCount()
    } catch (error) {
        console.log("Something went wrong")
    }
}

loadAllIssues()

// get all section count
function getCount() {
    let allIssueCount = document.getElementById("issue-count")
    // get all cards numbers
    const allCardsNumbers = document.getElementById("card-container").childElementCount;

    // set the count on the dashboard
    allIssueCount.innerText = allCardsNumbers
}

// loadAllIssues()

function displayALlIssues(allIssues) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""

    for (let issue of allIssues) {
        const issueCard = document.createElement("div");
        issueCard.innerHTML = `
            <div id="${issue.id}" class="issue-card h-[28rem] w-auto border-t-4 ${updateCard(issue.status)} p-3 space-y-5 rounded-md shadow-md">
                <div class="severity flex items-center justify-between">
                    <div class="flex items-center justify-center w-9 h-9 rounded-full ${updateStatusCirlce(issue.status)}">
                        ${statusCircleIcon(issue.status)}
                    </div>
                    <span class="badge px-7 py-3 rounded-full ${getPriorityClass(issue.priority)}">${issue.priority.toUpperCase()}</span>
                </div>

                <div id="issue-details" class="issue-details border-b border-b-gray-500/40 space-y-5 py-5">
                
                    <h2 class="font-semibold">${issue.title}</h2>
                    <p>${issue.description}</p>
                    <div class="issue-help flex items-center gap-2">
                        ${updateBadgeLables(issue.labels)}
                    </div>

                </div>

                <div class="issue-author">
                    <p id="author-name" class="opacity-60">#${issue.id} by ${issue.author}</p>
                    <p id="issue-date" class="opacity-60">${issue.createdAt}</p>
                </div>
            </div>
        `
        cardContainer.appendChild(issueCard)
    }
}

// load all cards of open-section
async function loadOpenData() {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    try {
        const res = await fetch(url)
        const json = await res.json();
        displayOpenIssues(json.data)
        getCount()
    } catch (error) {
        console.log("Something went wrong")
    }
}

// display open data
function displayOpenIssues(alldata) {
    const openIssue = alldata.filter(item => item.status === "open");
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""

    for (let issue of openIssue) {
        const issueCard = document.createElement("div");
        issueCard.innerHTML = `
            <div id="${issue.id}" class="issue-card h-[28rem] w-auto border-t-4 ${updateCard(issue.status)} p-3 space-y-5 rounded-md shadow-md">
                <div class="severity flex items-center justify-between">
                    <div class="flex items-center justify-center w-9 h-9 rounded-full ${updateStatusCirlce(issue.status)}">
                        ${statusCircleIcon(issue.status)}
                    </div>
                    <span class="badge px-7 py-3 rounded-full ${getPriorityClass(issue.priority)}">${issue.priority.toUpperCase()}</span>
                </div>

                <div id="issue-details" class="issue-details border-b border-b-gray-500/40 space-y-5 py-5">
                
                    <h2 class="font-semibold">${issue.title}</h2>
                    <p>${issue.description}</p>
                    <div class="issue-help flex items-center gap-2">
                        ${updateBadgeLables(issue.labels)}
                    </div>

                </div>

                <div class="issue-author">
                    <p id="author-name" class="opacity-60">#${issue.id} by ${issue.author}</p>
                    <p id="issue-date" class="opacity-60">${issue.createdAt}</p>
                </div>
            </div>
        `
        cardContainer.appendChild(issueCard)
    }
}

// load closed issues
async function loadClosedData() {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    try {
        const res = await fetch(url)
        const json = await res.json();
        displayClosedIssues(json.data)
        getCount()
    } catch (error) {
        console.log("Something went wrong")
    }
}

// display closed issues
function displayClosedIssues(alldata) {
    const closedIssue = alldata.filter(item => item.status === "closed");
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""

    for (let issue of closedIssue) {
        const issueCard = document.createElement("div");
        issueCard.innerHTML = `
            <div id="${issue.id}" class="issue-card h-[28rem] w-auto border-t-4 ${updateCard(issue.status)} p-3 space-y-5 rounded-md shadow-md">
                <div class="severity flex items-center justify-between">
                    <div class="flex items-center justify-center w-9 h-9 rounded-full ${updateStatusCirlce(issue.status)}">
                        ${statusCircleIcon(issue.status)}
                    </div>
                    <span class="badge px-7 py-3 rounded-full ${getPriorityClass(issue.priority)}">${issue.priority.toUpperCase()}</span>
                </div>

                <div id="issue-details" class="issue-details border-b border-b-gray-500/40 space-y-5 py-5">
                
                    <h2 class="font-semibold">${issue.title}</h2>
                    <p>${issue.description}</p>
                    <div class="issue-help flex items-center gap-2">
                        ${updateBadgeLables(issue.labels)}
                    </div>

                </div>

                <div class="issue-author">
                    <p id="author-name" class="opacity-60">#${issue.id} by ${issue.author}</p>
                    <p id="issue-date" class="opacity-60">${issue.createdAt}</p>
                </div>
            </div>
        `
        cardContainer.appendChild(issueCard)
    }
}

// get triggered by the clicks on the toggles 
const toggles = document.querySelector(".toggle-area");

toggles.addEventListener("click", function (ev) {
    const target = ev.target;

    if (target.id === "all-btn") {
        loadAllIssues()
        removeActive(target)
    }
    else if (target.id === "open-btn") {
        loadOpenData()
        removeActive(target)
    }
    else if (target.id === "closed-btn") {
        loadClosedData()
        removeActive(target)
    }
})

// toggle effect functionality
function removeActive(target) {
    const selected = target;
    // get all btns 
    const allToggles = document.querySelectorAll(".btn-toggle")
    
    // remove all active calsses (btn-primary)
    allToggles.forEach(el => {
        el.classList.remove("btn-primary")
    });

    // update the design for selected toggle
    selected.classList.add("btn-primary")
}

// function for rendering cards on priority
function getPriorityClass(priority) {
    if (priority === "high") {
        return "bg-red-100 text-red-500"
    }
    else if (priority === "medium") {
        return "bg-orange-100 text-orange-500"
    }
    else if (priority === "low") {
        return "bg-gray-200 text-gray-500"
    }
    return "bg-green-100 text-green-500";
}

// update card style according to status
function updateCard(status) {
    if (status === "open") {
        return "border-t-green-600"
    }
    else if (status === "closed") {
        return "border-t-purple-600"
    }
}

// update the status circle
function updateStatusCirlce(status) {
    if (status === "open") {
        return "bg-green-300"
    }
    else if (status === "closed") {
        return "bg-purple-300"
    }
}

// update status circle icon
function statusCircleIcon(status) {
    if (status === "open") {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dashed-icon lucide-circle-dashed"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"/></svg>`
    }
    else if (status === "closed") {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`
    }
}

// update labels
function updateBadgeLables(labels) {
    return labels.map(item => `<div class="badge text-center w-auto h-auto p-2 rounded-full border ${updateBadgeColors(item)}">${item.toUpperCase()}</div>`).join("")
}

// update bade colors
function updateBadgeColors(item) {
    if (item === "enhancement") {
        return "border-green-300 bg-green-100 text-green-500"
    }
    else if (item === "bug") {
        return "border-red-300 bg-red-100 text-red-500"
    }
    else if (item === "help wanted") {
        return "border-purple-300 bg-purple-100 text-purple-500"
    }
    else if (item === "documentation") {
        return "border-orange-300 bg-orange-100 text-orange-500"
    }
    else {
        return "border-gray-300 bg-gray-100 text-gray-500"
    }
}