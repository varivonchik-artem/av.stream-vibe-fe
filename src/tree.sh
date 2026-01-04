#!/bin/bash

print_tree() {
    local dir="$1"
    local prefix="$2"

    # Получаем список всех элементов
    local items=("$dir"/*)
    [ ${#items[@]} -eq 0 ] && return

    # Разделяем папки и файлы
    local dirs=()
    local files=()
    for file in "${items[@]}"; do
        [ -e "$file" ] || continue
        [ "$(basename "$file")" == "node_modules" ] && continue

        if [ -d "$file" ]; then
            dirs+=("$file")
        else
            files+=("$file")
        fi
    done

    # Соединяем папки и файлы в один массив
    local combined=("${dirs[@]}" "${files[@]}")
    local last_index=$((${#combined[@]} - 1))

    # Выводим элементы
    for i in "${!combined[@]}"; do
        local file="${combined[$i]}"

        if [ "$i" -eq "$last_index" ]; then
            local connector="└── "
            local new_prefix="$prefix    "
        else
            local connector="├── "
            local new_prefix="$prefix│   "
        fi

        echo "${prefix}${connector}$(basename "$file")"

        if [ -d "$file" ]; then
            print_tree "$file" "$new_prefix"
        fi
    done
}

# Запуск для текущей директории
print_tree "." ""
