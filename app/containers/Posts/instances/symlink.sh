for file in ./*
do
echo $file
regex='.*_(.*$)'
if [[ $file =~ $regex ]]
then
	tempfile="${BASH_REMATCH[1]}"
	ln -rs "$file" "$tempfile"
fi
done

