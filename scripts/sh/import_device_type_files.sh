#!/bin/bash

# import_device_type_files.sh - convert vera source device file to initial device type definition

SCRIPTNAME=$(basename "${0}")
USAGE="${SCRIPTNAME} (file | dir)"
SH_SCRIPT_DIR="$(dirname "$(realpath "${0}")")"
SCRIPT_DIR="$(dirname $SH_SCRIPT_DIR)"
JQ_SCRIPT_DIR="${SCRIPT_DIR}/jq"
NODE_SCRIPT_DIR="${SCRIPT_DIR}/node"
REPO_DIR="$(dirname "${SCRIPT_DIR}")"
VERA_DEV_TYPE_DIR="${REPO_DIR}/src/luup_devices"

snakecase=${SH_SCRIPT_DIR}/snakecase.sh
device_type_jq=${JQ_SCRIPT_DIR}/device_type.jq
device_json_to_module=${NODE_SCRIPT_DIR}/device_json_to_module.js

if [[ $# -lt 1 ]]
then
  echo "${USAGE}" >&2
  exit 1
fi

src="${1}"
if [[ -d "$src" ]]
then
  src="${src%/}/D_*.xml"
fi

for file in ${src}
do
  echo "${file} ..."

  file_base="$(basename "${file}" ".xml" | sed 's/^D_//' | "${snakecase}")"
  filename="${VERA_DEV_TYPE_DIR}/${file_base}.js"

  xml2js -a -ns "${file}" |
  jq -L "${JQ_SCRIPT_DIR}" --indent 2 --arg "device_type" "${file_base}" -f "$device_type_jq" |
  node "${device_json_to_module}" >  "${filename}"
done