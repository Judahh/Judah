<div id="DivIdCode">
    <div id="DivIdCodeBackground">
        <div id="DivIdText">
            <?php
            for($indexBackground=0;$indexBackground<100;$indexBackground++) {
            ?>
                01001010 01110101 01100100 01100001 01101000 00100000 01001000 01101111 01101100 01100001 01101110 01100100 01100001 00100000 01000011 01101111 01110010 01110010 01100101 01101001 01100001 00100000 01001100 01101001 01101101 01100001
            <?php
            }
            ?>
        </div>
    </div>

    <div id="DivIdProjectTitle">
        <div id="DivIdText">
            <div id="DivIdProjectTitleText" contenteditable="true">
                Project Title
            </div>
        </div>
    </div>

    <div id="DivIdCodeTitle">
        <div id="DivIdText">
            <div id="DivIdCodeTitleText" contenteditable="true">
                Code Title
            </div>
        </div>
    </div>

    <div id="DivIdTableCodeWrap">
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
