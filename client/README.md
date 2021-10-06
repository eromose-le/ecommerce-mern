`RUN COMMANDS`

# INSTALL DEPENDENCIES

- yarn || npm install

# RUN SERVER

- npm start || yarn start

`GIT COMMANDS`

# REACT SNIPPETS SHORT CUTS

<!-- extenstion ES7 React/Redux/GraphQL  -->

- raf
- rafce

`GIT COMMANDS`

# LIST

git show-branch
git show-branch –all
git show-branch -r
git branch
git branch -r // only remote
git branch -a // all both local and remote
git branch -a | grep ‘remotes’

# CREATE

git branch <branch-name> // local branch
git push origin <branch-name> // remote branch

<!-- create from <develop branch> -->

git checkout -b myFeature develop
git commit -am "Your message"

<!-- merge changes to develop branch -->

git checkout develop
git merge --no-ff myFeature

<!-- push changes to the server -->

git push origin develop
git push origin myFeature

# UPDATE

<!-- sync from remote origin to local branch -->

git fetch 'https://github.com/eromose-le/ecommerce-react-ui.git' develop
git push 'https://github.com/eromose-le/ecommerce-react-ui.git' develop -f

git push origin master --force
git push origin --all

# DELETE

git branch -D <branch-name> // local branch
git push <origin> --delete <branch-name> // remote branch

# REFRESH

git fetch --all --prune

# SWAP

git checkout <branch-name> // switch branch
git checkout -b <branch-name> // create and switch branch
git branch -M main // rename current branch

# MERGE

- Checkout feature branch // create feature branch
- Checkout master branch // switch to master branch
  git merge <feature-branch-name> // merge feature branch to master branch

# REMOTE || PULL

git remote -v // list all remote branches
git remote add origin “https://github.com/eromose-le/ecommerce-react-ui.git” // add [remote] origin
https://github.com/safak/youtube.git
git pull origin master // after adding [remote] origin, oull master branch

# COMMIT

git reset --hard HEAD~1 // delete last commit
git reset --soft HEAD~1 // revert to last commit
git reset --mixed HEAD~1

git commit -m “Commit message”
git commit –amend -m “Add file 3 – Commit 3” // correct commit msg

<!-- commit history -->

git log --graph --pretty=oneline --abbrev-commit

# CLONE

git clone --single-branch -b react-mini https://github.com/safak/youtube.git .

# HISTORY

git log // check history of commits
git checkout <commit-code> // look at the commited code

# VIEW

gitk // visualize branch tree
git log --graph // visualize branch tree

git config --global alias.lgb "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset%n' --abbrev-commit --date=relative --branches"
git lgb

# NOTE

- Always create a branch from the [local] development branch before working on a new feature
- Pull changes from [remote] development branch before merging latest commits
