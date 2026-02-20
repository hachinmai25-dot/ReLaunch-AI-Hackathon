function analyzeResume() {

    const resultSection = document.getElementById("resultSection");
    const scoreElement = document.getElementById("score");
    const gapsElement = document.getElementById("gaps");
    const roadmapElement = document.getElementById("roadmap");

    resultSection.classList.remove("hidden");

    const readinessScore = 72;

    const skillGaps = [
        "Cloud Deployment (AWS)",
        "Docker & Kubernetes",
        "CI/CD Pipelines"
    ];

    const learningRoadmap = [
        "AWS Cloud Practitioner Certification",
        "Docker & Kubernetes Fundamentals",
        "DevOps CI/CD with GitHub Actions"
    ];

    scoreElement.innerText = readinessScore;

    gapsElement.innerHTML = "";
    roadmapElement.innerHTML = "";

    skillGaps.forEach(gap => {
        const li = document.createElement("li");
        li.textContent = gap;
        gapsElement.appendChild(li);
    });

    learningRoadmap.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        roadmapElement.appendChild(li);
    });
}
