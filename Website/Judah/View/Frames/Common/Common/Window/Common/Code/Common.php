<div id="DivIdCode">
    <div id="DivIdProjectTitle">
        <div id="DivIdText">
            <div id="DivIdProjectTitleText">
                JUDAH
            </div>
        </div>
    </div>

    <div id="DivIdTableCodeWrap">
        <div id="DivIdNeon">
            <div id="DivIdMenuItem">
                <div id="DivIdIcon">gh</div>
            </div>
        </div>
        <div id="DivIdNeon">
            <div id="DivIdMenuItem">
                <div id="DivIdIcon">ijklmno</div>
            </div>
        </div>
        <table id="TableIdCode" border="0" cellpadding="0" cellspacing="0" contenteditable="true">
            <tbody>
                <?php
                    for($index=1;$index<1;$index++) {
                ?>
                        <tr id="TrIdCode">
                            <td id="TdIdColumnLine" contenteditable="false">
                                <div id="DivIdText" contenteditable="false">
                                    <div id="DivIdColumnLineText" contenteditable="false"></div>
                                </div>
                            </td>
                            <td id="TdIdColumnCode">
                                <div id="DivIdColumnCodeText">
                                    <?php
                                        echo "Code Example " . $index;
                                    ?>
                                </div>
                            </td>
                        </tr>
                <?php
                    }
                ?>
            </tbody>
        </table>
    </div>
</div>
