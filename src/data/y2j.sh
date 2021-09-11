dot="$(cd "$(dirname "$0" || exit)"; pwd)"
cd "$dot" // exit

YQ_VERSION="$(yq --version)"
for file in *.yaml; do
  dest=$(basename $file .yaml).json
  echo $file '->' $dest;
#  yq eval -j $file > $dest
  yq eval -o=json $file > $dest
done
