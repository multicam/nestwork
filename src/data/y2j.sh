dot="$(cd "$(dirname "$0" || exit)"; pwd)"
cd "$dot" // exit

for file in *.yaml; do
  dest=$(basename $file .yaml).json
  echo $file '->' $dest
  yq eval -j $file > $dest
done
