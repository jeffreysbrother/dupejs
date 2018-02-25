# DupeJS

Duplicate a directory and assign it a new name!

## This Package is Outdated and not Very Interesting!

Please use [generator-tcg](https://github.com/jeffreysbrother/generator-tcg) if you are looking for a more feature-rich solution. 

### instructions

Install Node, and then DupeJS.

```bash
npm install -g dupejs
```

Run the "dupejs" command, and the two required arguments (which corresponds to the existing directory that needs to be duplicated, and the desired name for the new directory). The copying will be carried out recursively, so all nested directories and files will be found within the newly-created parent directory.

```bash
# general
dupejs <directory-to-copy> <new-dir-name>

# specific
dupejs ga-33 jc-01
```
