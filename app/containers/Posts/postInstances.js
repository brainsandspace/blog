/**
 * Be aware teat months go from 0 to 11
 * 
 * TODO proabably use a database. There is a lot of unnecessary repetition going on here.
 * 
 */
const postInstances = new Map();

postInstances.set('Figuring Out Posts', {
  slug: 'figuring-out-posts',
  dates: [new Date(2017, 2, 4)],
});

postInstances.set('Title Goes Here', {
  slug: 'title-goes-here',
  dates: [new Date(2017, 2, 5)],
});

postInstances.set('Random Thoughts', {
  slug: 'random-thoughts',
  dates: [new Date(2017, 2, 6, 1, 56)],
});

postInstances.set('Blogging CLI Tool?', {
  slug: 'excited-for-the-future',
  dates: [new Date(2017, 2, 12, 4, 4)],
});

postInstances.set('Hrmph', {
  slug: 'another-week-down-the-drain',
  dates: [new Date(2017, 2, 20, 2, 7)],
});

postInstances.set('Woop Woop', {
  slug: 'things-are-lookin-up',
  dates: [new Date(2017, 2, 23, 2, 13)],
});

postInstances.set('Broken Pipes', {
  slug: 'itsa-mea-mario',
  dates: [new Date(2017, 2, 27, 3, 0)],
});

postInstances.set('Internet Privacy', {
  slug: 'fuck-those-republicans',
  dates: [new Date(2017, 2, 29, 5, 25)],
});

postInstances.set('Now', {
  slug: 'i-feel-a-blog-post-coming-on',
  dates: [new Date(2017, 2, 31, 0, 19)],
});

postInstances.set("A Better Night's Sleep", {
  slug: 'production-error-tracking',
  dates: [new Date(2017, 2, 31, 16, 24)],
});

postInstances.set('Whoah?', {
  slug: 'whoa',
  dates: [new Date(2017, 3, 3, 2, 16)],
});

postInstances.set('Little Hi Little Hey', {
  slug: 'something-old-something-new',
  dates: [new Date(2017, 3, 24, 1, 40)],
});

postInstances.set('Write Something', {
  slug: 'write-something',
  dates: [new Date(2017, 3, 26, 1, 47)],
});

postInstances.set('Yet Another Test', {
  slug: 'another-test',
  dates: [new Date(2017, 3, 26, 2, 3)],
});

postInstances.set('And Mumblin', {
  slug: 'bumblin',
  dates: [new Date(2017, 3, 30, 6, 15)],
});

postInstances.set('Not Yet', {
  slug: 'can-i-use-css-grid-on-android',
  dates: [new Date(2017, 4, 4, 4, 51)],
});

postInstances.set('See Slug Slow', {
  slug: 'i-am-too-drunk-to-be-trying-to-work',
  dates: [new Date(2017, 4, 6, 5, 8)],
});

export default postInstances;
