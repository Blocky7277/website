export type ProjectAttributes = {
    title: string,
    desc: string,
    in_portfolio: boolean,
    in_archive: boolean,
    git: string
}

export type Project = {
    attributes: ProjectAttributes,
    images: string[],
}
