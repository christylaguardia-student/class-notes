create a new repository on the command line

```
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:christylaguardia/oregon-trail.git
git push -u origin master
```

push an existing repository from the command line
```
git remote add origin git@github.com:christylaguardia/oregon-trail.git
git push -u origin master
```

```
git reset --hard origin/master
```

checkout file from different branch
```
git checkout master -- tests/bitmap-transformer.test.js
```

rename a branch
```
git branch -m oldName newName
push origin :oldName
git push --set-upstream origin newName
```
