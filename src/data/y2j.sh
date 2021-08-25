for file in *.yaml; do
  dest=$(basename $file .yaml).json
  echo $file '->' $dest
  yq eval -o=json $file > $dest
done
