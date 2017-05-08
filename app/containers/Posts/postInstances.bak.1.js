/**
 * Be aware teat months go from 0 to 11
 */
const postInstances = new Map();

postInstances.set('Figuring Out Posts', {
  filename: 'figuring-out-posts',
  dates: [new Date(2017, 2, 4)],
});

postInstances.set('Title Goes Here', {
  filename: 'title-goes-here',
  dates: [new Date(2017, 2, 5)],
});

postInstances.set('Playing With CSS Grid', {
  filename: 'grid-grid-grid',
  dates: [new Date(2017, 2, 5)],
});

export default postInstances;
