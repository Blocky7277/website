{
    description = "Nix Flake for React Development";

    inputs = {
        nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-26.05";
        flake-parts.url = "github:hercules-ci/flake-parts";
    };

    outputs = { flake-parts, ...} @inputs:
        flake-parts.lib.mkFlake { inherit inputs; } {
            # Linux x86 and ARM as well as MacOS x86 and ARM
            systems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
            perSystem = {pkgs, ...}: {
                devShells.default = pkgs.mkShell {
                    buildInputs = with pkgs; [
                        nodejs
                        vtsls
                    ];
                };
            };
        };
}

