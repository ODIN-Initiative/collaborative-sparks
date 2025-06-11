import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function watchObsidianVault(vaultPath) {
    return /** @type {import('astro').AstroIntegration} */ ({
        name: "watch-obsidian-vault",
        hooks: {
            "astro:server:setup": ({ server, refreshContent }) => {
                if (server.config.mode !== "development") {
                    return;
                }

                const fullVaultPath = path.resolve(__dirname, vaultPath);
                // server.watcher.add() accept path which we want to watch.
                server.watcher.add(fullVaultPath);
                server.watcher
                    .on("add", (pathAdded) => {
                        if (pathAdded.startsWith(fullVaultPath)) {
                            // magician emoji: 🧙‍♂️
                            console.log(`🧙 Vault file ${pathAdded} added; rebuilding...`);

                            // console.log(server.config.plugins)
                            server.close()
                            server.restart();
                        }
                    })
                    .on("change", (pathChanged) => {
                        if (pathChanged.startsWith(fullVaultPath)) {
                            // magician emoji: 🧙‍♂️
                            console.log(`🧙 Vault file ${pathChanged} updated; rebuilding...`);
                            // console.log(server.config.plugins)
                            server.close()
                            server.restart();
                        }
                    });
            },
            "astro:config:setup": ({ addWatchFile }) => {
                addWatchFile(path.resolve(__dirname, vaultPath));
            },
        },
    });
}
