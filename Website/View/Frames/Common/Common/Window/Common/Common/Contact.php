<?php
    include ('../../../../../../Languages/MultilingualText.php');
    include ('../../../../../../Languages/CheckLanguage.php');
?>

<div id="DivIdCode">
    <div id="DivIdContact">
        <div id="DivIdProjectTitle">
            <div id="DivIdText">
                <div id="DivIdProjectTitleText">
                    <div id="DivIdTitleTextSize">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "contact");
                        ?>
                    </div>
                </div>
                <div id="DivIdProjectTitleText2">
                    <div id="DivIdTitleTextSize">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "doYouWantToHireMe");
                        ?>
                    </div>
                </div>
            </div>
        </div>

        <div id="DivIdTableCodeWrap">
            <div id="DivFullBlock">
                <div id="DivHalfBlock">
                    <div id="DivFloatLeft">
                        <div id="DivIdText">
                            <?php
                                $multilingualText = MultilingualText::MultilingualText();
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "company");
                            ?>:
                        </div>
                    </div>
                    <div id="DivFloatLeft">
                        <input id="InputIdCompany">
                        </input>
                    </div>
                </div>
                <div id="DivHalfBlock">
                    <div id="DivFloatLeft">
                        <div id="DivIdText">
                            <?php
                                $multilingualText = MultilingualText::MultilingualText();
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "name");
                            ?>:
                        </div>
                    </div>
                    <div id="DivFloatLeft">
                        <input id="InputIdName">
                        </input>
                    </div>
                </div>
            </div>
            <div id="DivFullBlock">
                <div id="DivHalfBlock">
                    <div id="DivIdText">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "email");
                        ?>:
                    </div>
                    <table id="TableIdEmail">
                        <tr id="TrIdTableEmail">
                            <td id="TdIdTableCircle">

                            </td>
                            <td id="TdIdTableEmail">
                                <input id="InputIdEmail">
                                </input>
                            </td>
                            <td id="TdIdTableCircle">
                                <div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="addEmail()">+</div></div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="DivHalfBlock">
                    <div id="DivIdText">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "phone");
                        ?>:
                    </div>
                    <table id="TableIdPhone">
                        <tr id="TrIdTablePhone">
                            <td id="TdIdTableCircle">

                            </td>
                            <td id="TdIdTablePhone">
                                <label>
                                    <select id="SelectIdPhone">
                                        <option class="OptionClassPhone" id="OptionIdPhone">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "mobile");
                                            ?>
                                        </option>
                                        <option class="OptionClassPhone" id="OptionIdPhone">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "landline");
                                            ?>
                                        </option>
                                    </select>
                                </label>
                            </td>
                            <td id="TdIdTablePhone">
                                <input id="InputIdPhone">
                                </input>
                            </td>
                            <td id="TdIdTableCircle">
                                <div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="addPhone()">+</div></div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="DivFullBlock">
                <div id="DivIdText">
                    <?php
                        $multilingualText = MultilingualText::MultilingualText();
                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "address");
                    ?>:
                </div>
                <table id="TableIdAddress">
                    <tr id="TrIdTableAddress">
                        <td id="TdIdTableCircle">

                        </td>
                        <td id="TdIdTableAddress">
                            <input id="InputIdAddress">
                            </input>
                        </td>
                        <td id="TdIdTableCircle">
                            <div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="addAddress()">+</div></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="DivFullBlock">
                <div id="DivThirdBlock">
                    <div id="DivFloatLeft">
                        <div id="DivIdText">
                            <?php
                                $multilingualText = MultilingualText::MultilingualText();
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "jobTitle");
                            ?>:
                        </div>
                    </div>
                    <div id="DivFloatLeft">
                        <table id="TableIdJobTitle">
                            <tr id="TrIdTableJobTitle">
                                <td id="TdIdTableJobTitle">
                                    <label>
                                        <select id="SelectIdJobTitleType">
                                            <option id="OptionIdJobTitleType">
                                                <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "regular");
                                                ?>
                                            </option>
                                            <option id="OptionIdJobTitleType">
                                                <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "consultant");
                                                ?>
                                            </option>
                                            <option id="OptionIdJobTitleType">
                                                <?php
                                                    $multilingualText = MultilingualText::MultilingualText();
                                                    echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "temporary");
                                                ?>
                                            </option>
                                        </select>
                                    </label>
                                </td>
                                <td id="TdIdTableJobTitle">
                                    <input id="InputIdJobTitle">
                                    </input>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div id="DivThirdBlock">
                    <div id="DivFloatLeft">
                        <div id="DivIdText">
                            <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "salary");
                            ?>:
                        </div>
                    </div>
                    <div id="DivFloatLeft">
                        <table id="TableIdSalary">
                            <tr id="TrIdTableSalary">
                                <td id="TdIdTableSalary">
                                    <label>
                                        <select id="SelectIdSalaryCoin">
                                            <option id="OptionIdSalaryCoin">
                                                US$
                                            </option>
                                            <option id="OptionIdSalaryCoin">
                                                R$
                                            </option>
                                        </select>
                                    </label>
                                </td>
                                <td id="TdIdTableSalary">
                                    <div id="DivFloatLeft">
                                        <input id="InputIdSalary">
                                        </input>
                                    </div>
                                </td>
                                <td id="TdIdTableSalary">
                                    <label>
                                        <select id="SelectIdSalaryType">
                                            <option id="OptionIdSalaryType">
                                                <?php
                                                    $multilingualText = MultilingualText::MultilingualText();
                                                    echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "perHour");
                                                ?>
                                            </option>
                                            <option id="OptionIdSalaryType">
                                                <?php
                                                    $multilingualText = MultilingualText::MultilingualText();
                                                    echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "perMonth");
                                                ?>
                                            </option>
                                        </select>
                                    </label>
                                </td>
                                <td id="TdIdTableFlexible">
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne1" value="none" name="flexible"/>
                                            <label for="squaredOne1"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "flexible");
                                            ?>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div id="DivThirdBlock">
                    <div id="DivFloatLeft">
                        <div id="DivIdText">
                            <?php
                                $multilingualText = MultilingualText::MultilingualText();
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "workingHours");
                            ?>:
                        </div>
                    </div>
                    <div id="DivFloatLeft">
                        <table id="TableIdWorkingHours">
                            <tr id="TrIdTableWorkingHours">
                                <td id="TdIdTableWeek">
                                    <div id="DivIdSquare">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "sunday");
                                            ?>
                                        </div>
                                    </div>
                                    <div id="DivIdSquare">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "monday");
                                            ?>
                                        </div>
                                    </div>
                                    <div id="DivIdSquare">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "tuesday");
                                            ?>
                                        </div>
                                    </div>
                                    <div id="DivIdSquare">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "wednesday");
                                            ?>
                                        </div>
                                    </div>
                                    <div id="DivIdSquare">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "thursday");
                                            ?>
                                        </div>
                                    </div>
                                    <div id="DivIdSquare">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "friday");
                                            ?>
                                        </div>
                                    </div>
                                    <div id="DivIdSquare">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "saturday");
                                            ?>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="TrIdTableWorkingHours">
                                <td id="TdIdTableWeek">
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne2" value="none" name="weekDay"/>
                                            <label for="squaredOne2"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne3" value="none" name="weekDay"/>
                                            <label for="squaredOne3"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne4" value="none" name="weekDay"/>
                                            <label for="squaredOne4"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne5" value="none" name="weekDay"/>
                                            <label for="squaredOne5"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne6" value="none" name="weekDay"/>
                                            <label for="squaredOne6"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne7" value="none" name="weekDay"/>
                                            <label for="squaredOne7"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne8" value="none" name="weekDay"/>
                                            <label for="squaredOne8"></label>
                                        </div>
                                    </div>
                                </td>
                                <td id="TdIdTableFlexible">
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne9" value="none" name="flexible"/>
                                            <label for="squaredOne9"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "flexible");
                                            ?>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="TrIdTableWorkingHours">
                                <td id="TdIdTableWorkingHours">
                                    <table id="TableIdIn">
                                        <tr id="TrIdTableIn">
                                            <td id="TdIdTableIn">
                                                <div id="DivIdText">
                                                    <?php
                                                        $multilingualText = MultilingualText::MultilingualText();
                                                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "in");
                                                    ?>:
                                                </div>
                                            </td>
                                            <td id="TdIdTableIn">
                                                <input id="InputIdHourIn">
                                                </input>
                                            </td>
                                            <td id="TdIdTableIn">
                                                <div id="DivIdText">
                                                    <?php
                                                        $multilingualText = MultilingualText::MultilingualText();
                                                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "hour");
                                                    ?>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td id="TdIdTableFlexible">
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne10" value="none" name="flexible"/>
                                            <label for="squaredOne10"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "flexible");
                                            ?>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr id="TrIdTableWorkingHours">
                                <td id="TdIdTableWorkingHours">
                                    <table id="TableIdOut">
                                        <tr id="TrIdTableOut">
                                            <td id="TdIdTableOut">
                                                <div id="DivIdText">
                                                    <?php
                                                        $multilingualText = MultilingualText::MultilingualText();
                                                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "out");
                                                    ?>:
                                                </div>
                                            </td>
                                            <td id="TdIdTableOut">
                                                <input id="InputIdHourOut">
                                                </input>
                                            </td>
                                            <td id="TdIdTableOut">
                                                <div id="DivIdText">
                                                    <?php
                                                        $multilingualText = MultilingualText::MultilingualText();
                                                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "hour");
                                                    ?>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td id="TdIdTableFlexible">
                                    <div id="DivFloatLeft">
                                        <div class="squaredOne">
                                            <input type="checkbox" id="squaredOne11" value="none" name="flexible"/>
                                            <label for="squaredOne11"></label>
                                        </div>
                                    </div>
                                    <div id="DivFloatLeft">
                                        <div id="DivIdText">
                                            <?php
                                                $multilingualText = MultilingualText::MultilingualText();
                                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "flexible");
                                            ?>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
            <div id="DivFullBlock">
                <div id="DivFullBlock">
                    <div id="DivIdText">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "description");
                        ?>:
                    </div>
                </div>
                <div id="DivFullBlock">
                    <textarea id="TextAreaIdDescription">
                    </textarea>
                </div>
            </div>
            <div id="DivFullBlock">
                <button id="ButtonIdSend" onclick="sendMail()">
                    <div id="DivIdText">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "send");
                        ?>
                    </div>
                </button>
            </div>

            <div id="DivIdDivisor">
                <div id="DivIdDivisorA">
                    <div id="DivIdNeon">
                        <div id="DivIdMenuItem">
                            <div id="DivIdIcon">
                                <div id="DivIdFontBig">±</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="DivIdDivisorB">
                    <div id="DivIdText">
                        <div id="DivIdProjectTitleText3">
                            <div id="DivIdTitleTextSize">
                                <?php
                                $multilingualText = MultilingualText::MultilingualText();
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "curriculumVitae");
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div id="DivFullBlock">
                <button id="ButtonIdSend" onclick="startToMakeCurriculumVitae()">
                    <div id="DivIdText">
                        <?php
                        $multilingualText = MultilingualText::MultilingualText();
                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "download");
                        ?>
                    </div>
                </button>
            </div>

            <div id="DivIdDivisor">
                <div id="DivIdDivisorA">
                    <div id="DivIdNeon">
                        <div id="DivId40Height">
                            <div id="DivIdIconSocialMedia">
                                <div id="DivIdFontBig">2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="DivIdDivisorB">
                    <div id="DivIdText">
                        <div id="DivIdProjectTitleText3">
                            <div id="DivIdTitleTextSize">
                                <?php
                                    $multilingualText = MultilingualText::MultilingualText();
                                    echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Contact", "socialMedia");
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="DivIdContent">
                <br>
                <div id="DivFullBlock">
                    <div id="DivId32Height">
                        <div id="DivFloatLeft">
                            <div id="DivIdNeon">
                                <a id="DivIdIconSocialMedia" href="https://br.linkedin.com/pub/judah-holanda/4b/692/6ab" target="_blank">
                                    i
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft">
                            <div id="DivIdNeon">
                                <a id="DivIdIconSocialMedia2" href="http://github.com/Judahh/" target="_blank">
                                    z
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft">
                            <div id="DivIdNeon">
                                <a id="DivIdIconSocialMedia" href="http://facebook.com/JHCL007" target="_blank">
                                    f
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft">
                            <div id="DivIdNeon">
                                <a id="DivIdIconSocialMedia2" href="http://google.com/+JudahHolanda" target="_blank">
                                    h
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft">
                            <div id="DivIdNeon">
                                <a id="DivIdIconSocialMedia" href="http://twitter.com/JH_esse" target="_blank">
                                    l
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft">
                            <div id="DivIdNeon">
                                <a id="DivIdIconSocialMedia" href="http://youtube.com/c/JudahHolanda" target="_blank">
                                    x
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft">
                            <div id="DivIdNeon">
                                <a id="DivIdIconSocialMedia2" href="http://instagram.com/judahholanda/" target="_blank">
                                    i
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft">
                            <div id="DivIdNeon">
                                <a id="DivIdIconSocialMedia2" href="https://play.spotify.com/user/12142311218" target="_blank">
                                    s
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft" style="height: 45px; padding-left: 2px; padding-right: 2px;">
                            <div id="DivIdNeon">
                                <a id="DivIdIconSocialMedia4" href="http://grooveshark.com/#!/judah7" target="_blank">
                                    
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft" style="height: 45px; padding-top: 3px; padding-left: 3px; padding-right: 3px;">
                            <div id="DivIdNeon">
                                <a id="DivIdIcon" href="https://account.xbox.com/en-US/Profile?gamerTag=HELLSING4ever" target="_blank" style="font-size: 34px;">
                                    ¤
                                </a>
                            </div>
                        </div>
                        <div id="DivFloatLeft" style="height: 45px; padding-top: 3px; padding-left: 2px; padding-left: 2px;">
                            <div id="DivIdNeon">
                                <a id="DivIdIcon" href="http://us.playstation.com/publictrophy/index.htm?onlinename=MOHHAAMMED" target="_blank" style="font-size: 34px;">
                                    £
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</div>
