export type ProjectAttributes = {
    title: string,
    desc: string,
    in_portfolio: boolean,
    in_archive: boolean,
    tags: string,
    git: string,
}

export type Project = {
    attributes: ProjectAttributes,
    images: string[],
}
