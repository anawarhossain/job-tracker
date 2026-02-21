let interviewList = [];
let rejectedList = [];
let currenStatus = "All";

// header item get
const totalJobsCount = document.getElementById("total-jobs");
const totalInterviewCount = document.getElementById("total-interview");
const totalRejectedCount = document.getElementById("total-rejected");

// all, interviw, rejected button get
const allJobsBtn = document.getElementById("all-jobs-btn");
const interviewJobsbtn = document.getElementById("interview-jobs-btn");
const rejectedJobsbtn = document.getElementById("rejected-jobs-btn");

// Card section get
const totalJobsSection = document.getElementById("allCards");

// main section get (delegation using main tag)
const mainContainer = document.querySelector("main");

// Header item count
function totalCalculate() {
  totalJobsCount.innerText = totalJobsSection.children.length;
  totalInterviewCount.innerText = interviewList.length;
  totalRejectedCount.innerText = rejectedList.length;
}

totalCalculate();

// all, interviw, rejected button toggle
function toggleEvent(id) {
  allJobsBtn.classList.add("bg-white");
  interviewJobsbtn.classList.add("bg-white");
  rejectedJobsbtn.classList.add("bg-white");

  allJobsBtn.classList.remove("bg-[#3B82F6]");
  interviewJobsbtn.classList.remove("bg-[#3B82F6]");
  rejectedJobsbtn.classList.remove("bg-[#3B82F6]");

  // clicked item id get
  const selectIdem = document.getElementById(id);

  selectIdem.classList.remove("bg-white");
  selectIdem.classList.add("bg-[#3B82F6]");
}

mainContainer.addEventListener("click", function (event) {
  const eventId = event.target.id;
  const interviewId = document.getElementById("interview");

  if (eventId == interviewId.id) {
    // interview clicked kra card div
    const parentNode = event.target.parentNode.parentNode;

    // interview clicked kra card gr all information
    const companyName = parentNode.querySelector("#companyName").innerText;
    const position = parentNode.querySelector("#position").innerText;
    const location = parentNode.querySelector("#location").innerText;
    const type = parentNode.querySelector("#type").innerText;
    const salary = parentNode.querySelector("#salary").innerText;
    const status = parentNode.querySelector("#status").innerText;
    const description = parentNode.querySelector("#description").innerText;

    parentNode.querySelector("#status").classList.add("text-green")
    parentNode.querySelector("#status").innerText = "INTERVIEW";

    const cardInfo = {
      companyName,
      position,
      location,
      type,
      salary,
      status,
      description,
    };

    const clickedCardExist = interviewList.find(
      (card) => card.companyName === cardInfo.companyName,
    );

    if (!clickedCardExist) {
      interviewList.push(cardInfo);
    }
    totalCalculate();
  }
});
