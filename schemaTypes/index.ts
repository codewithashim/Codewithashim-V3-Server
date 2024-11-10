import blockContent from './common/blockContent'
import author from './blog/author'
import category from './blog/category'
import post from './blog/post'
import tags from './blog/tags'
import education from './education/education'
import experience from './experience/experience'
import gallery from './gallery/gallery'
import project from './project/project'

// Export the schema types
export const schemaTypes = [
    // Common
    blockContent,

    // Blog
    author,
    category,
    post,
    tags,

    // Education
    education,

    // Experience
    experience,

    // Gallery
    gallery,

    // Project
    project,
]