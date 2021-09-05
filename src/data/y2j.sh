for file in *.yaml; do
  dest=$(basename $file .yaml).json
  echo $file '->' $dest
  yq eval -j $file > $dest
done
