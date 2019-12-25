#!/bin/bash

# import_service_type_files.sh - convert vera source service file to initial service type definition

SCRIPTNAME=$(basename "${0}")
USAGE="${SCRIPTNAME} (file | dir)"
SH_SCRIPT_DIR="$(dirname "$(realpath "${0}")")"
SCRIPT_DIR="$(dirname $SH_SCRIPT_DIR)"
JQ_SCRIPT_DIR="${SCRIPT_DIR}/jq"
REPO_DIR="$(dirname "${SCRIPT_DIR}")"
VERA_SVC_TYPE_DIR="${REPO_DIR}/src/service_types"

service_type_jq=${JQ_SCRIPT_DIR}/service_type.jq
activate_json_comments=${SH_SCRIPT_DIR}/activate_json_comments.sh
json_type_to_js_module=${SH_SCRIPT_DIR}/json_type_to_js_module.sh

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

  file_base="$(basename "${file}" ".xml")"
  xml2js -a -ns "${file}" |
  jq --indent 2 --arg "service_type" "${file_base}" -f "$service_type_jq" |
   "${activate_json_comments}" |
    "${json_type_to_js_module}"  >  "${VERA_SVC_TYPE_DIR}/${file_base#S_}.js"
done