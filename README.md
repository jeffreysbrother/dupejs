# DupeJS

Duplicate a directory and assign it a new name!

### instructions

Install Node, and then DupeJS.

```bash
npm isntall -g dupejs
```

Run the "dupejs" command, and the two required arguments (which corresponds to the existing directory that needs to be duplicated, and the desired new directory name).

```bash
# general
dupejs <directory-to-copy> <new-dir-name>

# specific
dupejs ga-33 jc-01
```

The copying is carried out recursively, so all nested directories and files will be found within the newly-created parent directory.
