## Apps and Packages

- `@repo/api`: Express app
- `@repo/frontend`: React app
- `@repo/utils`: library shared by both `api` and `frontend` applications
- `@repo/slint-config`: `eslint` configurations
- `@repo/typescript-config`: `typescript` configurations
- `@repo/prettier-config`: `prettier` configuration

Each app and `utils` package is 100% [TypeScript](https://www.typescriptlang.org/).

## To Launch In Dev Mode

To develop all apps and packages, run the following command:

```
npm run dev
```


## Contributing

1. Create an **issue**. Assign yourself
2. Pull the latest changes from `dev` branch
3. Create a **new branch** from `dev` branch. Every branch name should start from task type (`feature`, `fix` or
   `test`), task number and short description. e.g. **feature/125/create-navbar**
4. Commit changes
5. Create **pull request**
6. Link pull request to an issue
7. **Squash and merge** into `dev` branch
8. Delete your branch
