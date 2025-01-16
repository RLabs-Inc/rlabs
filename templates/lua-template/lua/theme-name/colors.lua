local M = {}

-- Helper function to add opacity to colors
function M.with_opacity(color, opacity)
    -- Check if color is nil or not a string
    if not color or type(color) ~= 'string' then
        return color
    end
    -- Remove any leading '#' from the color
    color = color:gsub('^#', '')
    -- Return the color with opacity
    return '#' .. color .. opacity
end

-- Color palette
function M.get_colors()
    local colors = {
        -- Base colors
        bg0 = '${BG1}',
        bg1 = '${BG2}',
        bg2 = '${BG3}',
        fg0 = '${FG1}',
        fg1 = '${FG2}',
        fg2 = '${FG3}',
        border = '${BORDER}',

        -- Accent colors
        accent0 = '${AC1}',
        accent0_fg = '${AC1_FG}',
        accent1 = '${AC2}',
        accent1_fg = '${AC2_FG}',

        -- Semantic colors
        info = '${INFO}',
        info_fg = '${INFO_FG}',
        warning = '${WARNING}',
        warning_fg = '${WARNING_FG}',
        error = '${ERROR}',
        error_fg = '${ERROR_FG}',
        success = '${SUCCESS}',
        success_fg = '${SUCCESS_FG}',

        -- Special colors
        selection = '${selection}',
        selection_fg = '${SELECTION_FG}',
        line_highlight = '${lineHighlight}',
        line_highlight_fg = '${LINE_HIGHLIGHT_FG}',
        find_match = '${findMatch}',
        find_match_fg = '${FIND_MATCH_FG}',

        -- Syntax colors
        comment = '${comment}',
        keyword = '${keyword}',
        func = '${function}',
        func_call = '${functionCall}',
        method = '${method}',
        method_call = '${methodCall}',
        variable = '${variable}',
        variable_readonly = '${variableReadonly}',
        variable_declaration = '${variableDeclaration}',
        variable_property = '${variableProperty}',
        type = '${type}',
        type_parameter = '${typeParameter}',
        constant = '${constant}',
        class = '${class}',
        parameter = '${parameter}',
        property = '${property}',
        property_declaration = '${propertyDeclaration}',
        operator = '${operator}',
        storage = '${storage}',
        other = '${other}',
        language = '${language}',
        support_variable = '${supportVariable}',
        support_function = '${supportFunction}',
        support_method = '${supportMethod}',
        support_property = '${supportProperty}',
        punctuation = '${punctuation}',
        punctuation_quote = '${punctuationQuote}',
        punctuation_brace = '${punctuationBrace}',
        punctuation_comma = '${punctuationComma}',
        selector = '${selector}',
        support = '${support}',
        modifier = '${modifier}',
        control = '${control}',
        control_flow = '${controlFlow}',
        control_import = '${controlImport}',
        tag = '${tag}',
        tag_punctuation = '${tagPunctuation}',
        attribute = '${attribute}',
        unit = '${unit}',
        datetime = '${datetime}',
        
        -- Terminal colors (ANSI)
        black = '${Black}',
        bright_black = '${BrightBlack}',
        red = '${Red}',
        bright_red = '${BrightRed}',
        green = '${Green}',
        bright_green = '${BrightGreen}',
        yellow = '${Yellow}',
        bright_yellow = '${BrightYellow}',
        blue = '${Blue}',
        bright_blue = '${BrightBlue}',
        magenta = '${Magenta}',
        bright_magenta = '${BrightMagenta}',
        cyan = '${Cyan}',
        bright_cyan = '${BrightCyan}',
        white = '${White}',
        bright_white = '${BrightWhite}',
    }

    return colors
end

-- Setup terminal colors
function M.setup_terminal()
    local c = M.get_colors()
    
    -- Terminal color numbers
    vim.g.terminal_color_0 = c.black
    vim.g.terminal_color_8 = c.bright_black
    vim.g.terminal_color_1 = c.red
    vim.g.terminal_color_9 = c.bright_red
    vim.g.terminal_color_2 = c.green
    vim.g.terminal_color_10 = c.bright_green
    vim.g.terminal_color_3 = c.yellow
    vim.g.terminal_color_11 = c.bright_yellow
    vim.g.terminal_color_4 = c.blue
    vim.g.terminal_color_12 = c.bright_blue
    vim.g.terminal_color_5 = c.magenta
    vim.g.terminal_color_13 = c.bright_magenta
    vim.g.terminal_color_6 = c.cyan
    vim.g.terminal_color_14 = c.bright_cyan
    vim.g.terminal_color_7 = c.white
    vim.g.terminal_color_15 = c.bright_white
end

return M
