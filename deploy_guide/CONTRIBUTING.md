# Contributing to Grocery Bud

First off, thank you for considering contributing to Grocery Bud! 🎉

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Browser and OS** information

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear use case** for the feature
- **Detailed explanation** of the expected behavior
- **Examples** of how other apps implement similar features (if applicable)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/AmazingFeature
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** locally
   ```bash
   npm run dev
   npm run build
   npm run preview
   ```

4. **Commit your changes** with clear messages
   ```bash
   git commit -m "Add: Amazing new feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request** with a clear title and description

## Coding Standards

### JavaScript/React

- Use **functional components** and React Hooks
- Follow **ES6+ syntax**
- Use **meaningful variable names**
- Keep components **small and focused** (single responsibility)
- Add **comments** for complex logic

### CSS

- Use **CSS custom properties** (variables) from `global.css`
- Follow **BEM-like naming** for classes when appropriate
- Keep styles **component-scoped**
- Use **mobile-first** responsive design
- Avoid **!important** unless absolutely necessary

### Git Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Prefix with type:
  - `Add:` new features
  - `Fix:` bug fixes
  - `Update:` changes to existing features
  - `Remove:` removing features/files
  - `Docs:` documentation only changes
  - `Style:` formatting, missing semicolons, etc.
  - `Refactor:` code change that neither fixes a bug nor adds a feature

Example:
```
Add: localStorage persistence for grocery items

- Implement getLocalStorage and setLocalStorage helpers
- Update all CRUD operations to sync with localStorage
- Add useEffect to load initial data from storage
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Form.jsx        # Reusable form component
│   ├── Items.jsx       # List container
│   └── SingleItem.jsx  # Individual item
├── data/               # Static data/constants
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Development Workflow

1. **Start dev server**
   ```bash
   npm run dev
   ```

2. **Make changes** and see them instantly with HMR

3. **Test thoroughly** in multiple browsers if possible

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Testing Guidelines

Currently, the project doesn't have automated tests. When adding tests in the future:

- Write tests for new features
- Ensure existing tests pass
- Aim for meaningful test coverage
- Use descriptive test names

## Feature Ideas for Contributors

Looking for something to work on? Try these:

- [ ] Add dark mode toggle
- [ ] Implement categories/tags
- [ ] Add drag-and-drop reordering
- [ ] Create export/import functionality
- [ ] Add search/filter capability
- [ ] Implement sorting options
- [ ] Add item quantities/amounts
- [ ] Create shopping list templates
- [ ] Add unit tests with Vitest
- [ ] Implement keyboard shortcuts

## Questions?

Feel free to create an issue with the `question` label or reach out via:
- GitHub Issues
- Email (if provided)

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- No harassment or discrimination

---

Thank you for contributing! 🙌
