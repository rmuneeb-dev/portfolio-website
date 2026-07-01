# GitHub Upload Instructions

## Quick Steps to Push Your Project

### Step 1: Open Git Bash
- Right-click in your project folder
- Select "Git Bash Here"

### Step 2: Run These Commands (Copy & Paste)

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create first commit
git commit -m "Upload portfolio website"

# Add GitHub as remote
git remote add origin https://github.com/rmuneeb-dev/personal-portfolio-website.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enter GitHub Credentials
- If prompted for username: enter your GitHub username
- If prompted for password: use a Personal Access Token (not your password)
  - To create token: GitHub Settings → Developer settings → Personal access tokens → Generate new token
  - Give it "repo" permissions

### That's it!
All files are now on GitHub. Deploy whenever you're ready.

