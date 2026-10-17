# Hidden pages

These routes are hidden until the prayer form delivers to a real person.

- `request-prayer/page.tsx`: the form currently only `console.log`s the submission and tells the visitor it was received.
- `pray-for-others/page.tsx`: shows placeholder requests (Sarah, James, Maria) with made-up prayer counts.

They live outside `src/app/` so Next.js does not route or export them. To bring one back, wire it to a real
delivery path (e.g. a form service or email to a person who will read it), then move the folder back
into `src/app/` and re-add the links in `CommunitySection.tsx`.
