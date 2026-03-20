export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'style', 'test']],
        'subject-case': [2, 'always', 'sentence-case']
    }
}

// | Type       | Meaning                         |
// | ---------- | ------------------------------- |
// | `feat`     | New feature                     |
// | `fix`      | Bug fix                         |
// | `build`    | Build system changes            |
// | `chore`    | Minor tasks (deps, configs)     |
// | `ci`       | CI/CD changes                   |
// | `docs`     | Documentation                   |
// | `perf`     | Performance improvement         |
// | `refactor` | Code change without feature/bug |
// | `style`    | Formatting (no logic change)    |
// | `test`     | Adding/modifying tests          |

// EX:
// feat: Add user registration API
// feat(auth): Implement JWT authentication
// feat(bot): Add task creation command
