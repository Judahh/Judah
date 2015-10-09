<?php
//    include ('../../../../../../Languages/MultilingualText.php');
    include ('../../../../../../Languages/CheckLanguage.php');
?>

<div id="DivIdCode">
    <div id="DivIdWorkWithUs">
        <div id="DivIdProjectTitle">
            <div id="DivIdText">
                <div id="DivIdProjectTitleText">
                    <div id="DivIdTitleTextSize" style="color: #ffffff">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "WorkWithUs", "workWithUs");
                        ?>
                    </div>
                </div>
                <div id="DivIdProjectTitleText2">
                    <div id="DivIdTitleTextSize" style="color: #ffffff">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "WorkWithUs", "doYouWantToWorkWithUs");
                        ?>
                    </div>
                </div>
            </div>
        </div>

        <div id="DivIdTableCodeWrap">

        </div>
    </div>
</div>
