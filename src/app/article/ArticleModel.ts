export class Article {

    votes: number;
    title: string;
    link: String;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;

    }

    domain(): string {
        try {
            const domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }

    }

}