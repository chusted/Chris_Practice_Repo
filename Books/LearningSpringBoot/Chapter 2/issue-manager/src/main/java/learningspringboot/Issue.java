package learningspringboot;

import org.springframework.social.github.api.GitHubIssue;

/**
 * Created by chrishustedt on 9/28/15.
 */
public class Issue {
    private String repo;
    private GitHubIssue githubIssue;

    public Issue(String repo, GitHubIssue gitHubIssue) {
        this.repo = repo;
        this.githubIssue = gitHubIssue;
    }

    public String getRepo() {
        return repo;
    }

    public GitHubIssue getGithubIssue() {
        return githubIssue;
    }
}
