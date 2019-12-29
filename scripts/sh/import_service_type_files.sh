#!/bin/bash

# import_service_type_files.sh - convert vera source service file to initial service type definition

SCRIPTNAME=$(basename "${0}")
USAGE="${SCRIPTNAME} (file | dir)"
SH_SCRIPT_DIR="$(dirname "$(realpath "${0}")")"
SCRIPT_DIR="$(dirname $SH_SCRIPT_DIR)"
JQ_SCRIPT_DIR="${SCRIPT_DIR}/jq"
NODE_SCRIPT_DIR="${SCRIPT_DIR}/node"
REPO_DIR="$(dirname "${SCRIPT_DIR}")"
VERA_SVC_TYPE_DIR="${REPO_DIR}/src/luup_servicegs"

snakecase=${SH_SCRIPT_DIR}/snakecase.sh
service_type_jq=${JQ_SCRIPT_DIR}/service_type.jq
service_json_to_module=${NODE_SCRIPT_DIR}/service_json_to_module.js

if [[ $# -lt 1 ]]
then
  echo "${USAGE}" >&2
  exit 1
fi

src="${1}"
if [[ -d "$src" ]]
then
  src="${src%/}/S_*.xml"
fi

for file in ${src}
do
  echo "${file} ..."

  file_base="$(basename "${file}" ".xml" | sed 's/^S_//' | "${snakecase}")"
  filename="${VERA_SVC_TYPE_DIR}/${file_base}.js"

  xml2js -a -ns "${file}" |
  jq -L "${JQ_SCRIPT_DIR}" --indent 2 --arg "service_type" "${file_base}" -f "$service_type_jq" |
  node "${service_json_to_module}" >  "${filename}"
done