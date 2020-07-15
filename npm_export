cd
wget https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb &&
sudo dpkg -i packages-microsoft-prod.deb &&
sudo apt-get update; 
sudo apt-get install -y apt-transport-https && 
sudo apt-get update && 
sudo apt-get install -y dotnet-sdk-3.1 &&
sudo apt-get install -y aspnetcore-runtime-3.1 &&
 
export NVM_DIR="$HOME/.nvm" && (
git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
cd "$NVM_DIR"
git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
) && \. "$NVM_DIR/nvm.sh"

nvm i 12

echo "export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm" >> .bash_profile

. ~/.bash_profile
