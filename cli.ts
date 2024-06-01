import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("git", {
    name: "git",
    windows: [
        "${ProgramFiles}\\Git\\cmd\\git.exe",
    ],
    linux: [
        "/usr/bin/git",
    ],
});

/**
 * Represents a git command.
 */
export class GitCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("git", args, options);
    }
}

/**
 * Creates a new instance of the GitCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the GitCommand class.
 */
export function git(args?: CommandArgs, options?: CommandOptions): GitCommand {
    return new GitCommand(args, options);
}
