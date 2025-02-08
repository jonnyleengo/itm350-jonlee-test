# itm350-jonlee-test
Git is a distributed version control system that helps track changes in source code during development.

Initializing a Repository

To start using Git in a project, initialize a repository:
git init

To clone an existing repository:
git clone <repository_url>

Basic Git Commands

Adding Files to Staging

To add files to the staging area before committing:
git add <filename>

To add all modified files:
git add .

Committing Changes

To commit staged files with a message:
git commit -m "Your commit message"

Pushing Changes

To push committed changes to a remote repository:
git push origin <branch>

For example, to push changes to the main branch:
git push origin main

Pulling Updates

To pull the latest changes from a remote repository:
git pull origin <branch>

Changing the Remote Origin URL

If the remote repository URL needs to be updated:
git remote set-url origin <new_repository_url>

To verify the new URL:
git remote -v

Managing Changes

Stashing Changes

If you need to save changes temporarily without committing:
git stash

To apply the stashed changes:
git stash pop

To view the stash list:
git stash list

Reverting a Commit

To revert a specific commit (creating a new commit to undo the changes):
git revert <commit_hash>

Resetting Commits

To reset to a previous commit, discarding all later commits:
git reset --hard <commit_hash>

To keep changes but unstage them:
git reset --soft <commit_hash>

Inspecting Changes

Viewing Commit History

To see a list of past commits:
git log

For a compact history:
git log --oneline

Showing Differences

To see changes between commits or the working directory:
git diff

To see changes in a specific file:
git diff <filename>

Showing Commit Details

To display details of a specific commit:
git show <commit_hash>
