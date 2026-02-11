import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('my-blog', ({ data }) => !data.draft);

    // Sort by date descending
    blog.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    return rss({
        title: 'Eldho Eapen | Blog',
        description: 'My thoughts, tutorials, and notes.',
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            // Compute RSS link from post `id`
            // This example assumes all posts are rendered as `/blog/[id]` routes
            link: `/blog/${post.id}/`,
        })),
        customData: `
      <language>en-us</language>
      <copyright>CC BY-NC 4.0</copyright>
      <creativeCommons:license xmlns:creativeCommons="http://backend.userland.com/creativeCommonsRssModule">http://creativecommons.org/licenses/by-nc/4.0/</creativeCommons:license>
    `,
    });
}
