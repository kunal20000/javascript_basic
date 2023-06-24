let currentPage = 1;
    let issues = [];

    // Function to fetch issues from the GitHub API
    async function fetchIssues(pageNumber) {
      const url = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching issues:', error);
        return [];
      }
    }

    // Function to update the issue list on the page
    function updateIssueList() {
      const issueContainer = document.getElementById('issue_container');
      issueContainer.innerHTML = '';

      issues.forEach(issue => {
        const li = document.createElement('li');
        li.textContent = issue.title;
        issueContainer.appendChild(li);
      });
    }

    // Function to update the page indicator text
    function updatePageIndicator() {
      const pageIndicator = document.getElementById('page_indicator');
      pageIndicator.textContent = `Page number ${currentPage}`;
    }

    // Function to load the next page of issues
    async function loadNextPage() {
      currentPage++;
      issues = await fetchIssues(currentPage);
      updateIssueList();
      updatePageIndicator();
    }

    // Function to load the previous page of issues
    async function loadPreviousPage() {
      if (currentPage > 1) {
        currentPage--;
        issues = await fetchIssues(currentPage);
        updateIssueList();
        updatePageIndicator();
      }
    }

    // Event listeners for the load next and load previous buttons
    document.getElementById('load_next').addEventListener('click', loadNextPage);
    document.getElementById('load_prev').addEventListener('click', loadPreviousPage);

    // Initial page load
    fetchIssues(currentPage)
      .then(data => {
        issues = data;
        updateIssueList();
      })
      .catch(error => {
        console.error('Error fetching issues:', error);
    });